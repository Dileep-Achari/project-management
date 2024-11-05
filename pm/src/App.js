// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import AuthPage from './pages/authPage';
import Dashboard from './pages/dashBoard';
import './App.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <Router>
            <Navbar isAuthenticated={!!token} onLogout={handleLogout} />
            <Routes>
                <Route path="/login" element={<AuthPage setToken={setToken} />} />
                <Route path="/register" element={<AuthPage setToken={setToken} />} />
                <Route
                    path="/"
                    element={token ? <Dashboard token={token} /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
};

export default App;
