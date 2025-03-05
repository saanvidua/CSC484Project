import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


function Collection() {
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
      <Typography variant="body1">
        Here you can view and manage your collected items.
      </Typography>
    </Container>
    </div>
  );
}

export default Collection;