import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button, AppBar, Toolbar, IconButton, Grid, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import exploreItemsData from "../data/exploreItemsData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function ExploreItemDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const item = exploreItemsData.find(item => item.id === parseInt(id));

    if (!item) {
        return (
            <Container sx={{ mt: 4, pb: 8 }}>
                <Typography variant="h4">Item not found</Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/")}>Go Back to Home</Button>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4, pb: 8 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} aria-label="back">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Item Details</Typography>
                </Toolbar>
            </AppBar>

            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia component="img" image={item.image} alt={item.name} sx={{ height: 300, objectFit: "cover" }} />
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="h6" color="primary">{item.price}</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>{item.description}</Typography>
                    <CardActions sx={{ mt: 2 }}>
                        <Button variant="contained" onClick={() => navigate("/Buy")} color="primary">Buy Now </Button>
                        <Button variant="outlined">Add to Favorites</Button>
                    </CardActions>
                </Grid>
            </Grid>

            <Box sx={{ mt: 5 }}>
                <Typography variant="h6" gutterBottom>Price Trend (Last 7 Days)</Typography>
                <Box sx={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <AreaChart data={item.priceTrend}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Box>
            </Box>
        </Container>
    );
}

export default ExploreItemDetails;