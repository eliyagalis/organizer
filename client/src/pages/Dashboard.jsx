import React, { useState } from 'react'
import '../styles/DashboardStyle.css';
import { Link } from 'react-router';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {

    // const [first, setfirst] = useState(second)
  
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
                <div>*Company name*</div>
                <div className='sidebar-menu-item'>General</div>
                <div className='sidebar-menu'>
                    <div className='sidebar-menu-item'>Projects</div>
                    <div className='btn'>+</div>
                </div>
                <ul className='sidebar-ul'>
                    <li 
                    className='sidebar-menu-item'>Project 1</li>
                </ul>
                <div className='sidebar-bottom-menu sidebar-menu-item'>Settings</div>
            </div>
            <div className='panel'>
                <div className='title'>Project 1</div>
                <div className='btn'>
                    + Add Task
                </div>
                <div className='tasks-space'>
                <TaskCard />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard;