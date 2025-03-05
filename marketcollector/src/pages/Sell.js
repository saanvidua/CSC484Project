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

  const handleSell = () => {
    // Validate that all fields are filled
    if (name.trim() === "" || description.trim() === "" || condition.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }
    // Navigate to order-confirm page
    navigate("/order-confirm");
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
      <Container sx={{ mt: 4 }}>
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
          <Card sx={{ width: { xs: "100%", md: 250 } }}>
            <CardMedia
              component="img"
              image={image}
              alt="Item Image"
              sx={{ height: 200, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="body2">Image Preview</Typography>
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
            <Button variant="contained" onClick={handleSell}>
              List Item
            </Button>
          </Box>
        </Box>

        {/* Price Trend Chart */}
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
      </Container>
    </div>
  );
}

export default Sell;
