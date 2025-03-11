// src/pages/Sell.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import collectionItemsData from "../data/collectionItemsData";

function Sell({ setItems }) {
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("https://via.placeholder.com/250x200");
  const [condition, setCondition] = useState("");
  const [showCollectionPicker, setShowCollectionPicker] = useState(false);

  // Handle form submission
  const handleSell = () => {
    if (!name || !description || !price || !condition) {
      alert("Please fill out all fields.");
      return;
    }

    // Create new item object
    const newItem = {
      id: Date.now(), // Unique ID
      name,
      description,
      price: `$${price}`,
      image,
      condition,
      priceTrend: [{ day: "Day 1", price: parseFloat(price) }],
    };

    // Update items list in state
    setItems((prevItems) => [...prevItems, newItem]);

    // Navigate back to home
    navigate("/");
  };

  // Handle selecting an item from the collection
  const handleSelectFromCollection = (item) => {
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price.replace("$", "")); // Remove $ sign for input field
    setImage(item.image);
    setShowCollectionPicker(false);
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Preview uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sell
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4, pb: 8 }}>
        <Typography variant="h4" gutterBottom>
          List an Item for Sale
        </Typography>
        <Typography variant="body1" gutterBottom>
          Fill out the details to list your item for sale.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, mt: 3 }}>
          {/* Image Preview */}
          <Card sx={{ border: "4px solid #80471C", borderRadius: "8px", width: { xs: "100%", md: 250 } }}>
            <CardMedia component="img" image={image} alt="Item Image" sx={{ height: 200, objectFit: "cover" }} />
            <CardContent>
              <Typography variant="body2">Image Preview</Typography>
              <input type="file" accept="image/*" style={{ marginTop: "10px" }} onChange={handleImageUpload} />
            </CardContent>
          </Card>

          {/* Input Fields */}
          <Box sx={{ flex: 1 }}>
            <TextField label="Name" fullWidth sx={{ mb: 2 }} value={name} onChange={(e) => setName(e.target.value)} />
            <TextField
              label="Description"
              multiline
              rows={3}
              fullWidth
              sx={{ mb: 2 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField label="Price" fullWidth sx={{ mb: 2 }} value={price} onChange={(e) => setPrice(e.target.value)} />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="condition-label">Condition</InputLabel>
              <Select labelId="condition-label" value={condition} label="Condition" onChange={(e) => setCondition(e.target.value)}>
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="Like New">Like New</MenuItem>
                <MenuItem value="Used">Used</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 2 }}>
              <Button variant="outlined" onClick={() => setShowCollectionPicker(true)} sx={{ flex: 1 }}>
                Choose from My Collection
              </Button>
              <Button variant="contained" onClick={handleSell} sx={{ flex: 1 }}>
                List Item
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Collection Picker Dialog */}
      <Dialog open={showCollectionPicker} onClose={() => setShowCollectionPicker(false)}>
        <DialogTitle>Select Item from Collection</DialogTitle>
        <DialogContent>
          <List>
            {collectionItemsData.map((item) => (
              <ListItem button key={item.id} onClick={() => handleSelectFromCollection(item)}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Sell;
