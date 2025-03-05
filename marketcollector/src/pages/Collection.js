import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";

function Collection() {
  // Pre-populated filler items
  const [collectionItems, setCollectionItems] = useState([
    {
      name: "Collection Item 1",
      description: "First item in the collection",
      image: "https://via.placeholder.com/300x200",
      price: "10.00",
    },
    {
      name: "Collection Item 2",
      description: "Second item in the collection",
      image: "https://via.placeholder.com/300x200",
      price: "20.00",
    },
    {
      name: "Collection Item 3",
      description: "Third item in the collection",
      image: "https://via.placeholder.com/300x200",
      price: "30.00",
    },
  ]);

  // Dialog state and new item fields
  const [openDialog, setOpenDialog] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveItem = () => {
    // Ensure the item has at least a name
    if (newItem.name.trim() === "") {
      alert("Item must have a name.");
      return;
    }
    // Add new item to collection
    setCollectionItems([...collectionItems, newItem]);
    // Reset form fields
    setNewItem({ name: "", description: "", image: "", price: "" });
    // Close dialog
    setOpenDialog(false);
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Collection
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Collection
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here you can view and manage your collected items.
        </Typography>

        <Button variant="contained" onClick={handleOpenDialog} sx={{ mb: 3 }}>
          Add Item
        </Button>

        {/* If no items, show a message; otherwise, show a grid of cards */}
        {collectionItems.length === 0 ? (
          <Typography variant="body1">No items in your collection.</Typography>
        ) : (
          <Grid container spacing={2}>
            {collectionItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image || "https://via.placeholder.com/300x200"}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">
                      {item.description}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Price: ${item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Add Item Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              label="Name"
              fullWidth
              margin="dense"
              value={newItem.name}
              onChange={(e) =>
                setNewItem({ ...newItem, name: e.target.value })
              }
            />
            <TextField
              label="Description"
              fullWidth
              margin="dense"
              multiline
              rows={3}
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
            />
            <TextField
              label="Image URL"
              fullWidth
              margin="dense"
              value={newItem.image}
              onChange={(e) =>
                setNewItem({ ...newItem, image: e.target.value })
              }
            />
            <TextField
              label="Price"
              fullWidth
              margin="dense"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveItem} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Collection;
