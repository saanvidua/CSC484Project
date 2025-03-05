import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Account() {
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
      <Container sx={{ mt: 4 }}>
        {/* Avatar + Username */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            alt="User Profile"
            src="/images/pfp.jpg"
            sx={{ width: 80, height: 80, mr: 2 }}
          />
          <Typography variant="h5">YourUsername</Typography>
        </Box>

        {/* Tabs for different sections */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="account tabs"
            variant="scrollable"          // Enables horizontal scrolling
            scrollButtons="auto"          // Show scroll buttons when needed
            allowScrollButtonsMobile      // Force scroll buttons on mobile
          >
            <Tab label="My Collection" />
            <Tab label="Favorites" />
            <Tab label="Price Tracking" />
            <Tab label="Settings" />
          </Tabs>
        </Box>

        {/* Tab content */}
        <Box sx={{ mt: 2 }}>
          {tabValue === 0 && (
            <Typography>
              <strong>My Collection</strong> content goes here...
            </Typography>
          )}
          {tabValue === 1 && (
            <Typography>
              <strong>Favorites</strong> content goes here...
            </Typography>
          )}
          {tabValue === 2 && (
            <Typography>
              <strong>Price Tracking</strong> content goes here...
            </Typography>
          )}
          {tabValue === 3 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Account Settings
              </Typography>
              {/* Example settings form */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
}

export default Account;
