import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

function Account() {
  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Account Page
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Avatar on the left */}
          <Avatar
            alt="User Profile"
            src="/images/pfp.jpg"
            sx={{ width: 80, height: 80, mr: 2 }}
          />
          {/* Username on the right */}
          <Typography variant="h5">User123</Typography>
        </Box>
      </Container>
    </>
  );
}

export default Account;
