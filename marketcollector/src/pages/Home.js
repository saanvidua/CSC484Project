// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
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
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      {/* Header / AppBar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Collector's Market
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          For You
        </Typography>

        <Grid container spacing={4}>
          {items.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => navigate(`/item/${product.id}`)}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: 220, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0, justifyContent: "space-between" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/item/${product.id}`);
                    }}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/buy");
                    }}
                  >
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
