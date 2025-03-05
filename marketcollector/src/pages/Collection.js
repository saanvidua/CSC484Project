import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Collection() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Collection
      </Typography>
      <Typography variant="body1">
        Here you can view and manage your collected items.
      </Typography>
    </Container>
  );
}

export default Collection;