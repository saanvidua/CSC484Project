// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Search from "./pages/Search";
import Sell from "./pages/Sell";
import Account from "./pages/Account";
import CollectionItemDetails from "./pages/collectionItemDetails";
import ExploreItemDetails from "./pages/exploreItemDetails";
import OrderConfirm from "./pages/OrderConfirm";
import Buy from "./pages/Buy";
import exploreItemsData from "./data/exploreItemsData"; // Initial data

// MUI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SellIcon from "@mui/icons-material/Sell";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import "./App.css";

function BottomNavBar() {
  const location = useLocation();

  return (
    <BottomNavigation
      value={location.pathname}
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        boxShadow: "0px -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<Box sx={{ color: location.pathname === "/" ? "secondary.main" : "inherit" }}><HomeIcon /></Box>}
        component={Link}
        to="/"
        value="/"
      />
      <BottomNavigationAction
        label="Explore"
        icon={<Box sx={{ color: location.pathname === "/search" ? "secondary.main" : "inherit" }}><SearchIcon /></Box>}
        component={Link}
        to="/search"
        value="/search"
      />
      <BottomNavigationAction
        label="Sell"
        icon={<Box sx={{ color: location.pathname === "/sell" ? "secondary.main" : "inherit" }}><SellIcon /></Box>}
        component={Link}
        to="/sell"
        value="/sell"
      />
      <BottomNavigationAction
        label="Collection"
        icon={<Box sx={{ color: location.pathname === "/collection" ? "secondary.main" : "inherit" }}><CollectionsIcon /></Box>}
        component={Link}
        to="/collection"
        value="/collection"
      />
      <BottomNavigationAction
        label="Account"
        icon={<Box sx={{ color: location.pathname === "/account" ? "secondary.main" : "inherit" }}><AccountCircleIcon /></Box>}
        component={Link}
        to="/account"
        value="/account"
      />
    </BottomNavigation>
  );
}

function App() {
  // Use state to store and update items dynamically
  const [items, setItems] = useState(exploreItemsData);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/search" element={<Search items={items} />} />
        <Route path="/sell" element={<Sell setItems={setItems} />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/account" element={<Account />} />
        <Route path="/order-confirm" element={<OrderConfirm />} />
        <Route path="/item/:id" element={<ExploreItemDetails items={items} />} />
        <Route path="/collection-item/:id" element={<CollectionItemDetails />} />
      </Routes>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </Router>
  );
}

export default App;
