// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import ProjectList from '../components/projectList';
import TaskList from '../components/taskList';
import { getProjects } from '../api/project';
import { getTasks } from '../api/task';
import './dashBoard.css';

const Dashboard = ({ token }) => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsData = await getProjects(token);
                setProjects(projectsData);
            } catch (err) {
                console.error("Failed to fetch projects", err);
            }
        };
        fetchProjects();
    }, [token]);

    const handleProjectSelect = async (project) => {
        setSelectedProject(project);
        try {
            const tasksData = await getTasks(project._id, token);
            setTasks(tasksData);
        } catch (err) {
            console.error("Failed to fetch tasks", err);
        }
    };

    return (
        <div className="dashboard">
            <ProjectList projects={projects} onSelect={handleProjectSelect} />
            {selectedProject && <TaskList tasks={tasks} project={selectedProject} />}
        </div>
    );
};

export default Dashboard;
