import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Account() {
  const [tabValue, setTabValue] = React.useState(0);

  // Handle tab changes
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      {/* Header / AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Settings
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
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="settings tabs">
            <Tab label="My Collection" />
            <Tab label="Selling" />
            <Tab label="Favorites" />
            <Tab label="Price Tracking" />
          </Tabs>
        </Box>

        {/* Tab content: use conditional rendering to show the right content */}
        <Box sx={{ mt: 2 }}>
          {tabValue === 0 && (
            <Typography>
              <strong>My Collection</strong> content goes here...
            </Typography>
          )}
          {tabValue === 1 && (
            <Typography>
              <strong>Selling</strong> content goes here...
            </Typography>
          )}
          {tabValue === 2 && (
            <Typography>
              <strong>Favorites</strong> content goes here...
            </Typography>
          )}
          {tabValue === 3 && (
            <Typography>
              <strong>Price Tracking</strong> content goes here...
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}

export default Account;
