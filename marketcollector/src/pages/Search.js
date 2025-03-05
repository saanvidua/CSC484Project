import React from "react";
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

export default function Explore() {
  // State for search and sort order
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("asc"); // "asc" for ascending, "desc" for descending

  // Placeholder items with price property
  const items = [
    { id: 1, name: "Item 1", image: "https://via.placeholder.com/250x200", price: 10 },
    { id: 2, name: "Item 2", image: "https://via.placeholder.com/250x200", price: 20 },
    { id: 3, name: "Item 3", image: "https://via.placeholder.com/250x200", price: 30 },
    { id: 4, name: "Item 4", image: "https://via.placeholder.com/250x200", price: 40 },
  ];

  // Filter items based on search term (case-insensitive)
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the filtered items by price
  const sortedItems = filteredItems.sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

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

      {/* Scrollable Content Area (below the AppBar) */}
      <Box
        sx={{
          mt: 8, // space for the fixed AppBar (~64px)
          flex: 1,
          overflowY: "auto",
        }}
      >
        <Container sx={{ mt: 2 }}>
          <Typography variant="h4" gutterBottom>
            Explore Items
          </Typography>
          <Typography variant="body1" gutterBottom>
            Search for items you want to explore.
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mb: 3,
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              onClick={() => alert(`Searched for: ${searchTerm}`)}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Search
            </Button>
          </Box>

          {/* Sort by Price */}
          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="sort-order-label">Sort by Price</InputLabel>
              <Select
                labelId="sort-order-label"
                value={sortOrder}
                label="Sort by Price"
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Items Grid */}
          <Grid container spacing={2}>
            {sortedItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{ height: 140, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">Price: ${item.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* No Items Found Message */}
          {sortedItems.length === 0 && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              No items found.
            </Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
}
