import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import collectionItemsData from "../data/collectionItemsData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function Collection() {
    const navigate = useNavigate();
    
    // Initialize with hardcoded items + stored items
    const storedItems = JSON.parse(localStorage.getItem("collectionItems")) || [];
    const [items, setItems] = useState([...collectionItemsData, ...storedItems]);
    
    const [openDialog, setOpenDialog] = useState(false);
    const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });
    
    const handleNavigateToItemDetails = (item) => {
        navigate(`/collection-item/${item.id}`, { state: { item } });
    };
    
    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prev) => ({ ...prev, [name]: name === 'price' ? `$${value.replace(/[^0-9.]/g, '')}` : value }));
    };
    
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
    
    const generatePriceTrend = (basePrice) => {
      const base = parseFloat(basePrice.replace("$", ""));
      if (isNaN(base)) return [];
      return Array.from({ length: 7 }, (_, i) => ({
          day: `Day ${i + 1}`,
          price: parseFloat((base * (1 + (Math.random() * 0.3 - 0.15))).toFixed(2)) // Store as number
      }));
  };
  
    const handleAddItem = () => {
        const newItemWithId = { ...newItem, id: Date.now(), priceTrend: generatePriceTrend(newItem.price) };
        const updatedItems = [...items, newItemWithId];
        setItems(updatedItems);
        localStorage.setItem("collectionItems", JSON.stringify(updatedItems.filter(item => !collectionItemsData.some(hardcoded => hardcoded.id === item.id))));
        setNewItem({ name: "", description: "", price: "", image: "" });
        setOpenDialog(false);
    };
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      My Collection
                    </Typography>
                </Toolbar>
            </AppBar>

            <Fab 
                color="primary" 
                sx={{ position: "fixed", bottom: 60, right: 16 }} 
                onClick={handleOpenDialog}
            >
                <AddIcon />
            </Fab>

            <Container sx={{ mt: 4, pb: 8 }}>
                <Typography variant="h4" gutterBottom>
                    My Collection
                </Typography>

                <Grid container spacing={2}>
                    {items.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card
                                sx={{ border: '4px solid #000000', borderRadius: '8px', height: '16em',
                                    cursor: "pointer", "&:hover": { boxShadow: 6 } }}
                                onClick={() => handleNavigateToItemDetails(item)}
                            >
                                <CardMedia component="img" height="140" image={item.image} alt={item.name} />
                                <CardContent>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="body2">{item.description}</Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>Price: {item.price}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

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
                    <Button onClick={handleAddItem} variant="contained">Add Item</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Collection;

