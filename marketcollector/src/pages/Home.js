// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  AppBar,
  Toolbar
} from "@mui/material";

function Home({ items }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4, pb: 8 }}>
        <Typography variant="h4" gutterBottom>
          For You
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {items.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  cursor: "pointer",
                  border: "4px solid #80471C",
                  borderRadius: "8px",
                  "&:hover": { boxShadow: 6 },
                  height: "100%"
                }}
                onClick={() => navigate(`/item/${product.id}`)}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
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
