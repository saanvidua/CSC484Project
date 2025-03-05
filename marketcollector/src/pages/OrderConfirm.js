// src/pages/OrderConfirm.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function OrderConfirm() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Order Confirmation
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Your Order has been Confirmed!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thank you for your purchase.
        </Typography>
        <Button variant="contained" onClick={handleGoHome} sx={{ mt: 2 }}>
          Go Home
        </Button>
      </Container>
    </div>
  );
}

export default OrderConfirm;
