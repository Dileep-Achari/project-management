import axios from 'axios';

const API_URL = "http://localhost:5000/api";

export const login = async (credentials) => {
    const { data } = await axios.post(`${API_URL}/auth/login`, credentials);
    return data;
};

export const register = async (userInfo) => {
    const { data } = await axios.post(`${API_URL}/auth/register`, userInfo);
    return data;
};
