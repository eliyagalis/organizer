import Sidebar from "../components/Sidebar";
import { useState } from "react";
import TasksList from "../features/tasks/TaskList";
import "../styles/DashboardStyle.css";

const Dash = () => {
  const [selectedProject, setSelectedProject] = useState("6762a27ed336615d53d06444");
  
  return (
    <div>
      <div className="dashboard">
        <div className="page-divider">
          <div className="sidebar">
            <h1>Dashboard</h1>
            <Sidebar id={user._id} />
          </div>
          <div className="tasks-container">
            {selectedProject ? (
              <TasksList project={{ _id: selectedProject }} />
            ) : (
              <p>Select a project to view tasks</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;