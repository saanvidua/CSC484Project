// src/pages/Collection.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import collectionItemsData from "../data/collectionItemsData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Collection() {
  const navigate = useNavigate();

  // Load any stored items from localStorage and combine with hardcoded data
  const storedItems = JSON.parse(localStorage.getItem("collectionItems")) || [];
  const [items, setItems] = useState([...collectionItemsData, ...storedItems]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  // Calculate total value of collection
  const totalValue = items.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace("$", "")) || 0;
    return acc + numericPrice;
  }, 0);

  // Navigate to item details
  const handleNavigateToItemDetails = (item) => {
    navigate(`/collection-item/${item.id}`, { state: { item } });
  };

  // Dialog open/close
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  // Update new item fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // If editing "price", maintain a "$" prefix and allow only numbers and dots
    if (name === "price") {
      const cleaned = `$${value.replace(/[^0-9.]/g, "")}`;
      setNewItem((prev) => ({ ...prev, [name]: cleaned }));
    } else {
      setNewItem((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Generate mock price trend data
  const generatePriceTrend = (basePrice) => {
    const base = parseFloat(basePrice.replace("$", ""));
    if (isNaN(base)) return [];
    return Array.from({ length: 7 }, (_, i) => ({
      day: `Day ${i + 1}`,
      price: parseFloat(
        (base * (1 + (Math.random() * 0.3 - 0.15))).toFixed(2)
      ),
    }));
  };

  // Add new item
  const handleAddItem = () => {
    const newItemWithId = {
      ...newItem,
      id: Date.now(),
      priceTrend: generatePriceTrend(newItem.price),
    };
    const updatedItems = [...items, newItemWithId];
    // Save newly added items (excluding hardcoded ones) to localStorage
    localStorage.setItem(
      "collectionItems",
      JSON.stringify(
        updatedItems.filter(
          (item) => !collectionItemsData.some((hardcoded) => hardcoded.id === item.id)
        )
      )
    );
    setItems(updatedItems);
    setNewItem({ name: "", description: "", price: "", image: "" });
    setOpenDialog(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      {/* Top AppBar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Collection
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Floating Action Button (Add Item) */}
      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: 60, right: 16, zIndex: 999 }}
        onClick={handleOpenDialog}
      >
        <AddIcon />
      </Fab>

      <Container sx={{ mt: 4, pb: 8 }}>
        <Typography variant="h4" gutterBottom>
          My Collection
        </Typography>

        {/* Display total collection value */}
        <Typography variant="h6" sx={{ mb: 3 }}>
          Total Collection Value: ${totalValue.toFixed(2)}
        </Typography>

        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                onClick={() => handleNavigateToItemDetails(item)}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={item.image}
                  alt={item.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Price: {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dialog for adding new item */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            fullWidth
            value={newItem.name}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            multiline
            rows={3}
            value={newItem.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Price"
            name="price"
            fullWidth
            value={newItem.price}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" component="label" sx={{ mb: 2 }}>
            Upload Image
            <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
          </Button>
          {newItem.image && (
            <CardMedia
              component="img"
              height="140"
              image={newItem.image}
              alt="Preview"
              sx={{ mt: 2 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddItem} variant="contained">
            Add Item
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Collection;
