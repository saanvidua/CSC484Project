// src/pages/BuyConfirm.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button, AppBar, Toolbar } from "@mui/material";

function BuyConfirm() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Purchase Confirmation
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Thank you for your purchase!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Your order has been confirmed and will be processed shortly.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    </Box>
  );
}

export default BuyConfirm;
