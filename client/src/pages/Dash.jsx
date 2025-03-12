import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useUser } from "../context/userContext";
import TasksList from "../features/tasks/TaskList";
import "../styles/DashboardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";

const Dash = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const {user} = useUser();
  return (
    <div>
      <div className="dashboard">
      {user ?
        (<div className="page-divider">
          <div className="sidebar">

            <h3>organizer</h3>
            <p>Welcome, {user.username}</p>
            <Sidebar id={user._id} />
          </div>
          <div className="tasks-container">
            {selectedProject ? (
              <TasksList project={{ _id: selectedProject }} />
            ) : (
              <p>Select a project to view tasks</p>
            )}
          </div>
        </div>):
        (<div>
            <h3>Not logged in</h3>
            <p>Please log in to view this page</p>
            <FontAwesomeIcon icon="user" />
        </div>)}
      </div>
    </div>
  );
};

export default Dash;