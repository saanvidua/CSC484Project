// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Search from "./pages/Search";
import Sell from "./pages/Sell";
import Account from "./pages/Account";
import CollectionItemDetails from "./pages/collectionItemDetails"; // Ensure this file exists
import ExploreItemDetails from "./pages/exploreItemDetails"; // Ensure this file exists
import OrderConfirm from "./pages/OrderConfirm"; // Ensure this file exists
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/account" element={<Account />} />
        <Route path="/order-confirm" element={<OrderConfirm />} />
        <Route path="/item/:id" element={<ExploreItemDetails />} />
        <Route path="/collection-item/:id" element={<CollectionItemDetails />} />

      </Routes>

      <BottomNavBar />
    </Router>
  );
}

export default App;
