// src/components/TaskList.js
import React, { useState } from 'react';
import { createTask } from '../api/task';
import './taskList.css';

const TaskList = ({ tasks, project, token }) => {
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            await createTask({ ...newTask, project: project._id }, token);
            setNewTask({ title: '', description: '' });
            // You can trigger a re-fetch or update the task list here
        } catch (err) {
            console.error("Failed to create task", err);
        }
    };

    return (
        <div className="task-list">
            <h2>Tasks for {project.name}</h2>
            {tasks.map((task) => (
                <div key={task._id} className="task-item">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                </div>
            ))}
            <form onSubmit={handleAddTask} className="task-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Task Description"
                    value={newTask.description}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskList;
