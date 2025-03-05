import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Search() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search
      </Typography>
      <Typography variant="body1">
        Search Bar 
      </Typography>
    </Container>
  );
}

export default Search;