// src/pages/Search.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

function Search({ items }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items); // Initially display all items
  const [anchorEl, setAnchorEl] = useState(null);

  // Search function
  const handleSearch = () => {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  };

  // Handle search on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Open filter menu
  const openFilterMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close filter menu
  const closeFilterMenu = () => {
    setAnchorEl(null);
  };

  // Sort items by price
  const handleSort = (order) => {
    const sortedItems = [...filteredItems].sort((a, b) =>
      order === "asc" ? parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""))
                      : parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""))
    );
    setFilteredItems(sortedItems);
    closeFilterMenu();
  };

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
        <Container sx={{ mt: 2, pb: 8 }}>
          <Typography variant="h4" gutterBottom>
            Explore Items
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              padding: "4px 8px",
              mb: 3
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              InputProps={{ sx: { backgroundColor: "white", borderRadius: "4px" } }}
            />
            <IconButton onClick={handleSearch} sx={{ color: "secondary.main" }}>
              <SearchIcon />
            </IconButton>
            <IconButton onClick={openFilterMenu} sx={{ color: "secondary.main" }}>
              <FilterListIcon />
            </IconButton>
          </Box>

          {/* Filter Menu */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeFilterMenu}>
            <MenuItem onClick={() => handleSort("asc")}>Price: Low to High</MenuItem>
            <MenuItem onClick={() => handleSort("desc")}>Price: High to Low</MenuItem>
          </Menu>

          {/* Display Items */}
          <Typography variant="h5" sx={{ mb: 2 }}>
            {filteredItems.length ? "Search Results" : "No results found"}
          </Typography>

          <Grid container spacing={2}>
            {filteredItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card
                  sx={{
                    border: "4px solid #80471C",
                    borderRadius: "8px",
                    cursor: "pointer",
                    "&:hover": { boxShadow: 6 },
                    height: "100%"
                  }}
                  onClick={() => navigate(`/item/${item.id}`)}
                >
                  <CardMedia component="img" height="140" image={item.image} alt={item.name} />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">Price: {item.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Search;
