import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import itemsData from "../data/itemsData"; // Import centralized item data

export default function Explore() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("asc");

  // Filter and sort items
  const filteredItems = itemsData
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Fixed Header */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Explore
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Scrollable Content Area */}
      <Box sx={{ mt: 8, flex: 1, overflowY: "auto" }}>
        <Container sx={{ mt: 2 }}>
          <Typography variant="h4" gutterBottom>
            Explore Items
          </Typography>
          <Typography variant="body1" gutterBottom>
            Search for items you want to explore.
          </Typography>

          {/* Search & Sort */}
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mb: 3 }}>
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
            <Button variant="contained">Search</Button>
          </Box>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="sort-order-label">Sort by Price</InputLabel>
            <Select labelId="sort-order-label" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
          </FormControl>

          {/* Items Grid */}
          <Grid container spacing={2}>
            {filteredItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card
                  sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
                  onClick={() => navigate(`/item/${item.id}`)}
                >
                  <CardMedia component="img" height="140" image={item.image} alt={item.name} />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">Price: {item.price}</Typography>
                  </CardContent>
                  <Button size="small">Buy</Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
