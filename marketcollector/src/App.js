import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StorefrontIcon from "@mui/icons-material/Storefront"; // Sell icon
import CollectionsIcon from "@mui/icons-material/Collections"; // Collection icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Account icon

import "./App.css";

function App() {
  return (
    <Router>
      {/* Top Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MarketCollector
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>

      {/* Bottom Navigation */}
      <BottomNavigation
        showLabels
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "white", boxShadow: "0px -2px 5px rgba(0,0,0,0.1)" }}
      >
        <BottomNavigationAction label="Home" icon={<StorefrontIcon />} component={Link} to="/Home" />
        <BottomNavigationAction label="Explore" icon={<StorefrontIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Sell" icon={<StorefrontIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Collection" icon={<CollectionsIcon />} component={Link} to="/collection" />
        <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Router>
  );
}

export default App;
