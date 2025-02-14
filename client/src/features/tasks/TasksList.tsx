import React, { useEffect, useState } from 'react';
import TaskCardComponent from '../../components/TaskCardComponent';
import { fetchTasks } from '../../services/taskService';

type TasksListProps = {
    project: {
        name: string,
        _id: string
    },
};

const TasksList: React.FC<TasksListProps> = ({ project }) => {
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
        <div className='tasks-list'>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                tasks.map((task, index) => (
                    <TaskCardComponent key={index} task={task} />
                ))
            )}
        </div>
    );
};

export default TasksList;