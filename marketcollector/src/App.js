import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SellPage from './pages/SellPage';
import CollectionPage from './pages/CollectionPage';
import AccountPage from './pages/AccountPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<SellPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/account" element={<AccountPage />} />
        </Routes>
    );
}

export default App;

