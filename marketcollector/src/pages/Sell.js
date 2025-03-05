import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


function Sell() {
  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sell
          </Typography>
        </Toolbar>
      </AppBar>


    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sell
      </Typography>
      <Typography variant="body1">
        Here you can add items for sale.
      </Typography>
    </Container>
    </div>
  );
}

export default Sell;