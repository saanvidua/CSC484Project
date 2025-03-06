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
import collectionItemsData from "../data/collectionItemsData"; 
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Collection() {
    const navigate = useNavigate();

    // Move collectionItemsData into state to allow adding items dynamically
    const [items, setItems] = useState(collectionItemsData);

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
      setNewItem((prev) => ({ ...prev, [name]: name === 'price' ? value.replace(/[^0-9.]/g, '') : value }));
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

    const handleAddItem = () => {
        const newItemWithId = { ...newItem, id: items.length + 1 };
        setItems([...items, newItemWithId]);
        setNewItem({ name: "", description: "", price: "", image: "" });
        setOpenDialog(false);
    };

    return (
        <div>
            {/* Header */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      My Collection
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* Add Item Button */}
            <Fab 
                color="secondary" 
                sx={{ position: "fixed", top: 16, right: 16 }} 
                onClick={handleOpenDialog}
            >
                <AddIcon />
            </Fab>

            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    My Collection
                </Typography>
                <Typography variant="body1" gutterBottom>
                    View and manage your collections
                </Typography>

                {/* Display Items */}
                <Grid container spacing={2}>
                    {items.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card
                                sx={{ border: '4px solid #80471C',  // Dark brown border
                                borderRadius: '8px', cursor: "pointer", "&:hover": { boxShadow: 6 } }}
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
            {/* Add Item Dialog */}
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

