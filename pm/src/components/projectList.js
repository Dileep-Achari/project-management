// src/components/ProjectList.js
import React from 'react';
import './projectList.css';

const ProjectList = ({ projects, onSelect }) => {
    return (
        <div className="project-list">
            <h2>Projects</h2>
            {projects.map((project) => (
                <div key={project._id} onClick={() => onSelect(project)} className="project-item">
                    {project.name}
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
