import React, { useState } from 'react'
import '../styles/DashboardStyle.css';
import { Link } from 'react-router';
import TaskCard from '../components/TaskCard';

const Dashboard = ({companyName = 'Facebook Inc.'}) => {

    // const [first, setfirst] = useState(second)
    const TasksColl = [
        {id: 1, title: "TASK1", description: "Complete task1", status: "done"}, 
        {id: 2, title: "TASK2", description: "Complete task2", status: "pending"},
        {id:3, title: "TASK3", description: "Complete task3", status: "canceled"}];
    

    return (
    <div className='dashboard-page'>
        <div className='dashboard-header'>
            <Link className='dashboard-header-title' to="/dashboard">organizer</Link>
            <div>
            <Link className='dashboard-header-items btn' to="/">Home</Link>
            <Link className='dashboard-header-items btn' to="/profile">Profile</Link>
            </div>
        </div>
        <div className='dashboard-container'>
            <div className='sidebar'>
                <div className="title">Dashboard</div>
                <div>{companyName}</div>
                <br/>
                <div className='sidebar-menu-item'>General</div>
                <div className='sidebar-menu'>
                    <div className='sidebar-menu-item'>Projects</div>
                    <div className='btn'>+</div>
                </div>
                <ul className='sidebar-ul'>
                    <li 
                    className='sidebar-menu-item'>Project 1
                    </li>
                </ul>
                <div className='sidebar-bottom-menu sidebar-menu-item'>Settings</div>
            </div>
            <div className='panel'>
                <div className='panel-bar'>
                    <div className='title'>Project 1</div>
                    <div className='btn show-done'>Show Done</div>
                </div>
                <div className='btn'>
                    + Add Task
                </div>
                <div className='tasks-space'>
                {
                    TasksColl.map((t)=>
                        (<TaskCard key={t.id} 
                        title={t.title} 
                        description={t.description}
                        status={t.status}/>))
                }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard;