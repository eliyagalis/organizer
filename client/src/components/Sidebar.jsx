import { useEffect, useState } from "react";
import { createProject, deleteProject, fetchProjects } from "../services/projectService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faPlus, faSave, faX, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import { useUser } from "../context/userContext";
import Toast from "./Toast";
import CustomSpinner from "./CustomSpinner";

const Sidebar = ({ projects, setProjects, sendProject }) => {
  const { user } = useUser();

  const [myProjects, setMyProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newProject, setNewProject] = useState({ name: "" });
  const [editing, setEditing] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);      
      } catch (err) {
        setToastMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadProjects();
  }, []);

  const handleAddProject = (e) => {
    e.preventDefault();
    setEditing(true);
  };

  const handleSaveNewProject = async (e) => {
    e.preventDefault();
    if (!newProject.name.trim()) return;
    const projectExists = projects.some((p) => p.name === newProject.name);
    if (projectExists) return;

    try {
      const res = await createProject({ ...newProject, userId: user._id });
      setProjects([...projects, res.data]);
    } catch (err) {
      setToastMessage(err.message);
    } finally {
      setEditing(false);
      setNewProject({ name: "" });
    }
  };
  
  /* const handleDeleteProject = async (projectId) => {
    try {
      const res = await deleteProject(projectId);
      setEditing(false);
      setProjects((prevProjects) =>
        prevProjects.filter((p) => p._id !== projectId)
      );
    } catch (err) {
      setToastMessage(err.message);
    } finally {
      setNewProject({ name: "" });
    }
  }; */

  const handleProjectSend = (project) => {
    setSelectedProjectId(project._id);
  }

  return (
    <div>
      <div className="inline">
        <div className="headline2">Projects</div>
        {editing ? (
          <div>
            <button
              className="project-btn btn"
              onClick={() => setEditing(false)}
            >
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            <button className="project-btn btn" onClick={handleSaveNewProject}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
          </div>
        ) : (
          <button className="project-btn btn" onClick={handleAddProject}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
      </div>
      {isLoading ? (
        <div className="projects-list">
          <CustomSpinner />
        </div>
      ) : (
        <div className="projects-list">
          {projects.length === 0 && !editing ? (
            <p>
              Click <FontAwesomeIcon icon={faPlus} /> to add a new project
            </p>
          ) : (
            projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onClick={()=> handleProjectSend(project)}
                className={selectedProjectId === project._id ? "selected" : ""}
              />
            ))
          )}
          {editing && (
            <input
              autoFocus
              className="project-input"
              value={newProject.name}
              placeholder="Enter project name"
              onChange={(e) => setNewProject({ name: e.target.value })}
            />
          )}
        </div>
      )}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
};

export default Sidebar;