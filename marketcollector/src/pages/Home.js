import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import exploreItemsData from "../data/exploreItemsData"; // Import centralized item data

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, pb: 8 }}>
        <Typography variant="h4" gutterBottom> For you </Typography>
        {/* Corrected Grid Layout */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {exploreItemsData.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ cursor: "pointer",
              border: '4px solid #80471C',  // Dark brown border
              borderRadius: '8px', 
               "&:hover": { boxShadow: 6 }, 
               height: "100%" }} 
               onClick={() => navigate(`/item/${product.id}`, { state: {item: product, source: 'explore'  }})}>
                <CardMedia 
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ width: "100%", height: "180px", objectFit: "cover" }} // ✅ Keeps consistent image sizing
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate(`/item/${product.id}`)}>View</Button>
                  <Button size="small">Buy</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
