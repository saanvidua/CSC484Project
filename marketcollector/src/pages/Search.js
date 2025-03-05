import React, { useState } from "react";
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
import exploreItemsData from "../data/exploreItemsData"; // Import centralized item data
import { IconButton, Menu } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

// Hardcoded items shown before search - Trending Items?
const initialItems = [
    { id: 1, name: 'Trending Item 1', image: 'https://via.placeholder.com/150', price: 25.00 },
    { id: 2, name: 'Trending Item 2', image: 'https://via.placeholder.com/150', price: 30.00 },
    { id: 3, name: 'Recommended Item 1', image: 'https://via.placeholder.com/150', price: 65.00 },
    { id: 4, name: 'Recommended Item 2', image: 'https://via.placeholder.com/150', price: 95.00 },
];

const searchResults = [
    { id: 5, name: 'Search Result 1', image: 'https://via.placeholder.com/150', price: 50.00 },
    { id: 6, name: 'Search Result 2', image: 'https://via.placeholder.com/150', price: 155.00 },
    { id: 7, name: 'Search Result 3', image: 'https://via.placeholder.com/150', price: 70.00 },
    { id: 8, name: 'Search Result 4', image: 'https://via.placeholder.com/150', price: 85.00 },
    { id: 9, name: 'Search Result 5', image: 'https://via.placeholder.com/150', price: 10.00 },
];

export default function Explore() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [items, setItems] = useState(initialItems);  // Start with trending/recommended
    const [anchorEl, setAnchorEl] = useState(null);  // For filter menu
    const [searchPerformed, setSearchPerformed] = useState(false);  // Track if a search was performed


    const handleSearch = () => {
        // On search (button click or Enter), show the hardcoded searchResults (ignoring the actual term)
        setItems(searchResults);
        setSearchPerformed(true);
    };
    

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const openFilterMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closeFilterMenu = () => {
        setAnchorEl(null);
    };

    const handleSort = (order) => {
        const sortedItems = [...items].sort((a, b) =>
            order === "asc" ? a.price - b.price : b.price - a.price
        );
        setItems(sortedItems);
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
                <Container sx={{ mt: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Explore Items
                    </Typography>

                    {/* Search Bar with Search Icon and Filter Icon */}
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
                        <IconButton onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton onClick={openFilterMenu}>
                            <FilterListIcon />
                        </IconButton>
                    </Box>

                    {/* Filter Menu (Dropdown for Sort Options) */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={closeFilterMenu}
                    >
                        <MenuItem onClick={() => handleSort("asc")}>Price: Low to High</MenuItem>
                        <MenuItem onClick={() => handleSort("desc")}>Price: High to Low</MenuItem>
                    </Menu>
                    {/* Section Title - Trending Items or Search Results */}
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        {searchPerformed ? "Search Results" : "Trending Items"}
                    </Typography>
                    {/* Items Grid */}
                    <Grid container spacing={2}>
                        {items.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id}>
                                <Card
                                    sx={{ border: '4px solid #80471C',  // Dark brown border
                                    borderRadius: '8px', cursor: "pointer", "&:hover": { boxShadow: 6 } }}
                                    onClick={() => navigate(`/item/${item.id}`, { state: { item, source: 'explore' }})}

                                >
                                    <CardMedia component="img" height="140" image={item.image} alt={item.name} />
                                    <CardContent>
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="body2">Price: ${item.price.toFixed(2)}</Typography>
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
