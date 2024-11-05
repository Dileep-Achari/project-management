// src/components/AuthForm.js
import React, { useState } from 'react';
import './authForm.css';

const AuthForm = ({ onSubmit, isRegister }) => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            {isRegister && (
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
            )}
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
            />
            <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
        </form>
    );
};

export default AuthForm;
