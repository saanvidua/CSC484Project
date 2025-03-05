import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Account() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Account
      </Typography>
      <Typography variant="body1">
        Text
      </Typography>
    </Container>
  );
}

export default Account;