import React from "react";
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

// Recharts imports
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Sell() {
  // State for the condition dropdown
  const [condition, setCondition] = React.useState("");

  // Example filler data for the past 30 days
  const chartData = [
    { day: "Day 1", value: 100 },
    { day: "Day 2", value: 105 },
    { day: "Day 3", value: 98 },
    { day: "Day 4", value: 120 },
    { day: "Day 5", value: 90 },
    { day: "Day 6", value: 95 },
    { day: "Day 7", value: 110 },
    { day: "Day 8", value: 85 },
    { day: "Day 9", value: 115 },
    { day: "Day 10", value: 100 },
    { day: "Day 11", value: 105 },
    { day: "Day 12", value: 95 },
    { day: "Day 13", value: 100 },
    { day: "Day 14", value: 103 },
    { day: "Day 15", value: 97 },
    { day: "Day 16", value: 108 },
    { day: "Day 17", value: 112 },
    { day: "Day 18", value: 87 },
    { day: "Day 19", value: 92 },
    { day: "Day 20", value: 99 },
    { day: "Day 21", value: 104 },
    { day: "Day 22", value: 110 },
    { day: "Day 23", value: 115 },
    { day: "Day 24", value: 113 },
    { day: "Day 25", value: 105 },
    { day: "Day 26", value: 100 },
    { day: "Day 27", value: 96 },
    { day: "Day 28", value: 88 },
    { day: "Day 29", value: 120 },
    { day: "Day 30", value: 110 },
  ];

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
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
          Sell
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here you can add items for sale.
        </Typography>

        {/* Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mt: 3,
          }}
        >
          {/* Placeholder Image Card */}
          <Card sx={{ width: { xs: "100%", md: 250 } }}>
            <CardMedia
              component="img"
              image="https://via.placeholder.com/250x200"
              alt="Item Image"
              sx={{ height: 200, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="body2">Upload/Update Image</Typography>
            </CardContent>
          </Card>

          {/* Fields */}
          <Box sx={{ flex: 1 }}>
            <TextField
              label="Name"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Description"
              multiline
              rows={3}
              fullWidth
              sx={{ mb: 2 }}
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
            <Button variant="contained">Sell</Button>
          </Box>
        </Box>

        {/* Graph Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Market History (Last 30 Days)
          </Typography>
          {/* Use a ResponsiveContainer so the chart adjusts to screen size */}
          <Box sx={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Sell;
