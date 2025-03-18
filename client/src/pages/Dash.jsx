import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useUser } from "../context/userContext";
import TasksList from "../features/tasks/TaskList";
import "../styles/DashboardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { fetchProjects } from "../services/projectService";

const Dash = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const load = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      if (user) {
        setIsLoading(false);

        try {
          const res = await fetchProjects(user._id);
          setProjects(res.data);
        } catch (err) {
          console.error(err);
        }
      }
    };

    load();
  }, [user]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleProjectDelete = async (projectId) => {
    try {
      await deleteProject(projectId);
      setProjects((prevProjects) =>
        prevProjects.filter((p) => p._id !== projectId)
      );
      if (selectedProject?._id === projectId) {
        setSelectedProject(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="dashboard">
        {isLoading ? (
          <div className="spinner-container">
            <div className="skeleton-logo">organizer</div>
          </div>
        ) : user ? (
          <div className="page-divider">
            <div className="sidebar">
              <h3>organizer</h3>
              <FontAwesomeIcon icon={faUser} /> {user.username}
              <Sidebar
                projects={projects}
                setProjects={setProjects}
                sendProjectId={(projectId) => handleProjectSelect(projectId)}
              />
            </div>
            <div className="tasks-container">
              {selectedProject ? (
                <TasksList
                  project={selectedProject}
                  onDeleteProject={handleProjectDelete}
                  />
              ) : (
                <p>Select a project to view tasks</p>
              )}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3>
              <FontAwesomeIcon icon={faUser} /> You're not logged in
            </h3>
            <img
              style={{ width: "5rem" }}
              src="https://static-00.iconduck.com/assets.00/plug-disconnected-icon-512x512-nqt3yyww.png"
              alt="plug disconnected"
            />
            <p>Please log in to view this page</p>
            <Link to="/login" className="btn in-progress">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dash;
