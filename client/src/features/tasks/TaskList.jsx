import { useEffect, useState } from 'react';
import TaskCardComponent from '../../components/TaskCardComponent';
import { fetchTasks } from '../../services/taskService';


const TasksList = ({ project }) => {
  const [ProjectName, setProjectName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, [project._id]);

  if (isLoading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>Error loading tasks: {error}</p>;
  }

  return (
    <div>
      <h2>{}</h2>
      <div className='tasks'>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task, index) => (
            <TaskCardComponent key={index} task={task} />
          ))
        )}
      </div>

    </div>
  );
};

export default TasksList;