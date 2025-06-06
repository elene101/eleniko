import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div className="p-8 text-center text-red-600">Project not found.</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-indigo-700">{project.title}</h2>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 underline hover:text-indigo-800"
      >
        View Project
      </a>
      <div className="mt-6">
        <button
          onClick={() => navigate('/projects')}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
