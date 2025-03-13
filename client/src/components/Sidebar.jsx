import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/projectService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({id}) => {
  const [projects, setProjects] = useState([{_id: 1, name: 'Project 1'}, {_id: 2,name: 'Project 2'}]);
  const [isLoading, setIsLoading] = useState(true);
  const [newProject, setNewProject] = useState({name: 'New Project'});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetchProjects(id);
        // setProjects(res.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (isLoading) {
    return <p>Loading projects...</p>;
  }
  
  const handleAddProject = (e) => {
    e.preventDefault();
    setEditing(true);
    setProjects([...projects, newProject]);

  }

  return (
    <div className="row-div">
      <div>
        <div className='inline'>
          <div className='headline2'>Projects</div>
          <button className='add-project btn' onClick={handleAddProject}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className='projects-list'>
          {
            projects.length === 0 ? (
            <p>Click <FontAwesomeIcon icon={faPlus} /> to add a new project</p>
          ) : (
            projects.map((project, index) => (
              (editing?(
              <input key={index} onChange={(e)=>setNewProject({...newProject, name: e.target.value})} value={newProject.name}/>
            ):(
            <p key={project._id}>{project.name}</p>))
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;