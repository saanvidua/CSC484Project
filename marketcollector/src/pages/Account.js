import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

// MyCollection: Renders a button to navigate to Collection.js
function MyCollection() {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 2, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        My Collection
      </Typography>
      <Button variant="contained" onClick={() => navigate("/collection")}>
        Go to Collection
      </Button>
    </Box>
  );
}

// Favorites 
function Favorites() {
  const favoriteItems = [
    { id: 1, name: "Charizard Card", image: "/images/char.jpg", price: "$15.00" },
    { id: 2, name: "Jersey", image: "/images/luka.webp", price: "$25.00" },
    { id: 3, name: "Pikachu Card", image: "/images/pika.jpg", price: "$35.00" },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Favorites
      </Typography>
      <Grid container spacing={2}>
        {favoriteItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// Price Tracking
function PriceTracking() {
  const trackingItems = [
    { id: 1, name: "Charizard Card", image: "/images/char.jpg", price: "$12.00" },
    { id: 2, name: "Jersey", image: "/images/luka.webp", price: "$22.00" },
    { id: 3, name: "Pikachu Card", image: "/images/pika.jpg", price: "$32.00" },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Price Tracking
      </Typography>
      <Grid container spacing={2}>
        {trackingItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ "&:hover": { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


// Account
export default function Account() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Account
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4, pb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar
            alt="User Profile"
            src="/images/pfp.jpg"
            sx={{ width: 80, height: 80, mb: 1 }}
          />
          <Typography variant="h5">484Username</Typography>
          <Button variant="outlined" sx={{ mt: 1 }}>
            Edit Profile
          </Button>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="account tabs"
          >
            <Tab label="My Collection" />
            <Tab label="Favorites" />
            <Tab label="Price Tracking" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ mt: 2 }}>
          {tabValue === 0 && <MyCollection />}
          {tabValue === 1 && <Favorites />}
          {tabValue === 2 && <PriceTracking />}
        </Box>
      </Container>
    </>
  );
}
