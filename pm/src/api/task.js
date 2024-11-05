// src/api/task.js
import axios from 'axios';

const API_URL = "http://localhost:5000/api";

export const getTasks = async (projectId, token) => {
    const { data } = await axios.get(`${API_URL}/tasks/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
};

export const createTask = async (task, token) => {
    const { data } = await axios.post(`${API_URL}/tasks`, task, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
};
