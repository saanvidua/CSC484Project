import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Sell() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sell
      </Typography>
      <Typography variant="body1">
        Here you can add items for sale.
      </Typography>
    </Container>
  );
}

export default Sell;