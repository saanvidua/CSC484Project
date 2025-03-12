import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button, AppBar, Toolbar, IconButton, Grid, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function CollectionItemDetails({ setItems }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    
    const item = location.state?.item;

    const handleSell = () => {
        const newItem = {
          id: Date.now(), // Unique ID
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image,
          condition: "Like New",
          priceTrend: [{ day: "Day 1", price: parseFloat(item.price) }],
        };
    
        // Update items list in state
        setItems((prevItems) => [...prevItems, newItem]);
    
        // Navigate back to home
        navigate("/collection");
      };


    if (!item) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4">Item not found</Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/")}>Go Back to Home</Button>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            {/* Header */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} aria-label="back">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Item Details</Typography>
                </Toolbar>
            </AppBar>

            {/* Layout */}
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
                        <Button onClick={handleSell} variant="contained" color="primary">List for Sale</Button>
                    </CardActions>
                </Grid>
            </Grid>

            {/* ✅ Market History Graph (Only Shown Here) */}
            {item.priceTrend && item.priceTrend.length > 0 && (
                <Box sx={{ mt: 5 }}>
                    <Typography variant="h6" gutterBottom>
                        Market History (Last 7 Days)
                    </Typography>
                    <Box sx={{ width: "100%", height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart data={item.priceTrend}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis tickFormatter={(value) => `$${value.toFixed(2)}`} />
                                <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Box>
                </Box>
            )}
        </Container>
    );
}

export default CollectionItemDetails;


