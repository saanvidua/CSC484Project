import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

import '../App.css';

function HomePage() {
  const navigate = useNavigate();
  // Example product data
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300x200', price: '$10.00' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300x200', price: '$20.00' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300x200', price: '$30.00' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300x200', price: '$40.00' },
    { id: 4, name: 'Product 5', image: 'https://via.placeholder.com/300x200', price: '$40.00' },
    { id: 4, name: 'Product 6', image: 'https://via.placeholder.com/300x200', price: '$40.00' },
    { id: 4, name: 'Product 7', image: 'https://via.placeholder.com/300x200', price: '$40.00' },
    { id: 4, name: 'Product 8', image: 'https://via.placeholder.com/300x200', price: '$40.00' },
  ];

  return (
    <div className="App">
      {/* Header with AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MarketCollector
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MarketCollector!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore a wide variety of products.
        </Typography>

        {/* Product Cards */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={6} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
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
      {/* Bottom Navigation */}
      <BottomNavigation
        showLabels
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', boxShadow: '0px -2px 5px rgba(0,0,0,0.1)' }}
        onChange={(event, newValue) => navigate(newValue)}  // <== Add this
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} value="/" />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} value="/search" />
        <BottomNavigationAction label="Sell" icon={<ShoppingCartIcon />} value="/cart" />
        <BottomNavigationAction label="Collection" icon={<FavoriteIcon />} value="/collection" />
        <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} value="/account" />
      </BottomNavigation>
    </div>
  );
}

export default HomePage;