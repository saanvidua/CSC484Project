import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  const products = [
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/300x200", price: "$10.00" },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/300x200", price: "$20.00" },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/300x200", price: "$30.00" },
    { id: 4, name: "Product 4", image: "https://via.placeholder.com/300x200", price: "$40.00" },
    { id: 4, name: "Product 5", image: "https://via.placeholder.com/300x200", price: "$40.00" },
    { id: 4, name: "Product 6", image: "https://via.placeholder.com/300x200", price: "$40.00" },
    { id: 4, name: "Product 7", image: "https://via.placeholder.com/300x200", price: "$40.00" },
    { id: 4, name: "Product 8", image: "https://via.placeholder.com/300x200", price: "$40.00" },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to MarketCollector!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explore a wide variety of products.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6}>
            <Card>
              <CardMedia component="img" height="140" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">{product.price}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Buy</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;