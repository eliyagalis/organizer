import { useEffect, useState, useReducer } from 'react';
import '../styles/DashboardStyle.css';
import { Link } from 'react-router';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import TasksPanel from '../components/TasksPanel';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAddingNew, setIsAddingNew] = useState(false);

    useEffect(() => {
        axios
            .get('/projects/6762a27ed336615d53d06444/tasks')
            .then((res) => setTasks(res.data))
            .catch((error) => console.log(error))
            .finally(()=> setIsLoading(false));
    
    }, []);

    const saveTask = (task) => {
        if(isAddingNew) {
            axios.post('/projects/6762a27ed336615d53d06444/tasks/', task)
            .then((res)=> {
                console.log(res.data);
                setTasks((prevTasks)=>[...prevTasks, res.data]);
            })
            .catch((error)=>console.log(error));
        } else {
            axios.put(axios.defaults.baseURL+'/tasks/'+task._id, task)
            .then((res)=> setTasks((prevTasks) =>
                    prevTasks.map((prevTask) => 
                        (prevTask._id === task._id ? task : prevTask)))
            )
            .catch((error)=> console.log(error));
        }
        setIsAddingNew(false);
    };

    const deleteTask = (taskForDeletion) => {
        if(isAddingNew) {
            setTasks((prevState) =>
                prevState.filter((task) => task._id !== taskForDeletion._id)
            );
            setIsAddingNew(false);
        }
        else {
            axios.delete('/tasks/'+taskForDeletion._id).then((res)=> {
                setTasks((prevState) =>
                    prevState.filter((task) => task._id !== taskForDeletion._id)
                );
            }).catch((error)=> console.log(error));
        }
    };

    const addBlankTaskEvent = (e) => {
        const newTask = {
            _id: tasks.length + 1,
            title: '',
            description: '',
            status: 'pending',
        };
        setTasks([...tasks, newTask]);
        setIsAddingNew(true);
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <Link className="dashboard-header-title" to="/dashboard">
                    organizer
                </Link>
                <div>
                    <Link className="btn" to="/">
                        Home
                    </Link>
                    <Link className="btn" to="/profile">
                        Profile
                    </Link>
                </div>
            </div>
            <div className="dashboard-container">
                <Sidebar />
                <TasksPanel
                    tasks={tasks}
                    isAddingNew={isAddingNew}
                    isLoading={isLoading}
                    addBlankTaskEvent={addBlankTaskEvent}
                    saveTask={saveTask}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
};

export default Dashboard;