// src/api/project.js
import axios from 'axios';

const API_URL = "http://localhost:5000/api";

export const getProjects = async (token) => {
    const { data } = await axios.get(`${API_URL}/projects`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
};

export const createProject = async (project, token) => {
    const { data } = await axios.post(`${API_URL}/projects`, project, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
};
