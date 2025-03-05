import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Search from "./pages/Search";
import Sell from "./pages/Sell";
import Account from "./pages/Account";
import ItemDetails from "./pages/ItemDetails"; // Import Item Details page
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home"; // Home icon
import SearchIcon from "@mui/icons-material/Search"; // Explore icon
import SellIcon from "@mui/icons-material/Sell"; // Sell icon
import CollectionsIcon from "@mui/icons-material/Collections"; // Collection icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Account icon
import "./App.css";

function BottomNavBar() {
  const location = useLocation(); // React Router hook to get current location

  return (
    <BottomNavigation
      value={location.pathname} // Highlights the correct tab
      showLabels
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "white", boxShadow: "0px -2px 5px rgba(0,0,0,0.1)" }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" value="/" />
      <BottomNavigationAction label="Explore" icon={<SearchIcon />} component={Link} to="/search" value="/search" />
      <BottomNavigationAction label="Sell" icon={<SellIcon />} component={Link} to="/sell" value="/sell" />
      <BottomNavigationAction label="Collection" icon={<CollectionsIcon />} component={Link} to="/collection" value="/collection" />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} component={Link} to="/account" value="/account" />
    </BottomNavigation>
  );
}

function App() {
  return (
    <Router>
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/account" element={<Account />} />
        <Route path="/item/:id" element={<ItemDetails />} /> {/* ✅ Ensure this exists */}
      </Routes>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </Router>
  );
}

export default App;