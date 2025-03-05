import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import collectionItemsData from "../data/collectionItemsData"; 

function Collection() {
    const navigate = useNavigate();

    const handleNavigateToItemDetails = (item) => {
      navigate(`/collection-item/${item.id}`, { state: { item } });
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
                    View and manage your collected items.
                </Typography>

                {/* Display Items */}
                <Grid container spacing={2}>
                    {collectionItemsData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card
                                sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
                                onClick={() => handleNavigateToItemDetails(item)}
                            >
                                <CardMedia component="img" height="140" image={item.image} alt={item.name} />
                                <CardContent>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="body2">{item.description}</Typography>
                                    <Typography variant="body2" sx={{ mt: 1 }}>Price: {item.price}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Collection;

