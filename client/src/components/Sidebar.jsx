import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/projectService';

const Sidebar = ({id}) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetchProjects(id);
        setProjects(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>Error loading projects: {error}</p>;
  }

  return (
    <div className="row-div">
      <div>
        <h2>Projects</h2>
        <ul>
          {projects.length === 0 ? (
            <p>No projects available</p>
          ) : (
            projects.map((project) => (
              <li key={project._id}>{project.name}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;