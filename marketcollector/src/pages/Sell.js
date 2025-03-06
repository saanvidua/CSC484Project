// src/pages/Sell.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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

function Sell() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract item from navigation state, if available
  const initialItem = location.state?.item || {};

  const [name, setName] = useState(initialItem.name || "");
  const [description, setDescription] = useState(initialItem.description || "");
  const [price, setPrice] = useState(initialItem.price || "");
  const [image, setImage] = useState(initialItem.image || "https://via.placeholder.com/250x200");
  const [condition, setCondition] = useState("");

  const [showCollectionPicker, setShowCollectionPicker] = useState(false);

  // Example chart data (replace with your actual data if needed)
  const chartData = [
    { day: "Day 1", value: 100 },
    { day: "Day 2", value: 105 },
    { day: "Day 3", value: 98 },
    { day: "Day 4", value: 120 },
    { day: "Day 5", value: 90 },
    // ... more data
  ];

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result); // Preview the uploaded image
        };
        reader.readAsDataURL(file);
    }
};

  const handleSell = () => {
    // Validate that all fields are filled
    if (name.trim() === "" || description.trim() === "" || condition.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }
    // Navigate to order-confirm page
    navigate("/order-confirm");
  };
  const handleSelectFromCollection = (item) => {
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
    setImage(item.image);
    setShowCollectionPicker(false);
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
          List an item for sale
        </Typography>
        <Typography variant="body1" gutterBottom>
            Fill out the details to list your item for sale.
        </Typography>
      
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mt: 3,
          }}
        >
          {/* Image Preview */}
          <Card sx={{ border: '4px solid #80471C',  // Dark brown border
              borderRadius: '8px', width: { xs: "100%", md: 250 } }}>
            <CardMedia
              component="img"
              image={image}
              alt="Item Image"
              sx={{ height: 200, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="body2">Image Preview</Typography>
              <input
                type="file"
                accept="image/*"
                style={{ marginTop: "10px" }}
                onChange={handleImageUpload}
            />
            </CardContent>
          </Card>

          {/* Input Fields */}
          <Box sx={{ flex: 1 }}>
            <TextField
              label="Name"
              fullWidth
              sx={{ mb: 2 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Description"
              multiline
              rows={3}
              fullWidth
              sx={{ mb: 2 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Price"
              fullWidth
              sx={{ mb: 2 }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="condition-label">Condition</InputLabel>
              <Select
                labelId="condition-label"
                value={condition}
                label="Condition"
                onChange={handleConditionChange}
              >
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="Like New">Like New</MenuItem>
                <MenuItem value="Used">Used</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setShowCollectionPicker(true)}
                sx={{ flex: 1 }}
              >
                Choose from My Collection
              </Button>
              <Button
                variant="contained"
                onClick={handleSell}
                sx={{ flex: 1 }}
              >
                List New Item
              </Button>
            </Box>
            </Box>
        </Box>

        {/* Price Trend Chart */}
        {location.state?.item && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Market History (Last 30 Days)
          </Typography>
          <Box sx={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
        )}
      </Container>
      {/* Collection Picker Dialog */}
      <Dialog
        open={showCollectionPicker}
        onClose={() => setShowCollectionPicker(false)}
      >
        <DialogTitle>Select Item from Collection</DialogTitle>
        <DialogContent>
          <List>
            {collectionItemsData.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => handleSelectFromCollection(item)}
              >
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
