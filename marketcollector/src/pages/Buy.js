import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Buy() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your payment processing logic here
    console.log("Payment & Shipping info submitted");
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Payment & Shipping Info
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Form Container */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Shipping Information
          </Typography>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="State/Province"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Zip/Postal Code"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Payment Information
          </Typography>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Expiration Date (MM/YY)"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="primary" type="submit">
              Submit Payment
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleGoHome}>
              Cancel
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}

export default Buy;
