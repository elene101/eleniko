import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="p-6 text-red-600">Project not found.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">{project.title}</h2>
      <p className="text-gray-700 mb-6">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Visit Project
      </a>
      <br />
      <button
        onClick={() => navigate('/projects')}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Back to Projects
      </button>
    </div>
  );
};

export default ProjectDetails;
