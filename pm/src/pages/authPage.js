// src/pages/AuthPage.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthForm from '../components/authForm';
import { login, register } from '../api/auth';

const AuthPage = ({ setToken }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isRegister = location.pathname === '/register';

    const handleSubmit = async (formData) => {
        try {
            const data = isRegister ? await register(formData) : await login(formData);
            localStorage.setItem('token', data.token); // Save token to localStorage
            setToken(data.token);
            navigate('/');
        } catch (err) {
            alert("Authentication failed");
        }
    };

    return <AuthForm onSubmit={handleSubmit} isRegister={isRegister} />;
};

export default AuthPage;
