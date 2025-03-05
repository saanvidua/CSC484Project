import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home"; // Home icon
import SearchIcon from "@mui/icons-material/Search"; // Explore icon
import SellIcon from "@mui/icons-material/Sell"; // Sell icon
import CollectionsIcon from "@mui/icons-material/Collections"; // Collection icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Account icon

import "./App.css";

function App() {
  return (
    <Router>
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
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Explore" icon={<SearchIcon />} component={Link} to="/explore" />
        <BottomNavigationAction label="Sell" icon={<SellIcon />} component={Link} to="/sell" />
        <BottomNavigationAction label="Collection" icon={<CollectionsIcon />} component={Link} to="/collection" />
        <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} component={Link} to="/account" />
      </BottomNavigation>
    </Router>
  );
}

export default App;
