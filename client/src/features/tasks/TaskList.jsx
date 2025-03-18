import { useEffect, useState } from "react";
import TaskCardComponent from "../../components/TaskCardComponent";
import { fetchTasks } from "../../services/taskService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { deleteProject } from "../../services/projectService";

const TasksList = ({ project, onDeleteProject }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const res = await fetchTasks(project._id);
        setTasks(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, [project]);

  if (isLoading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>Error loading tasks: {error}</p>;
  }

  const handleProjectDelete = async () => {
    try {
      console.log("Delete project:", project._id);
      onDeleteProject(null);
      await deleteProject(project._id);
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleProjectEdit = () => {
    // history.push(`/edit-project/${project._id}`);
  };

  return (
    <div>
      {project ? (
        <div>
          <div className="headline1">{project.name}</div>
          <div className="headline2">{project.description}</div>
          <div className="edit-project">
            <div onClick={handleProjectEdit}>
              <FontAwesomeIcon icon={faEdit} />
              <span> Edit </span>
            </div>
            <div onClick={handleProjectDelete}>
              <FontAwesomeIcon icon={faXmarkCircle} />
              <span> Delete </span>
            </div>
          </div>
          <div className="tasks">
            {tasks.length === 0 ? (
              <p>No tasks available</p>
            ) : (
              tasks.map((task, index) => (
                <TaskCardComponent key={index} task={task} />
              ))
            )}
          </div>
        </div>
      ): (
        <p>Select a project to view tasks</p>
      )}
    </div>
  );
};

export default TasksList;
