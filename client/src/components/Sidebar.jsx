import React from 'react'

const Sidebar = ({companyName = 'Organization inc.'}) => {
  return (
    <div className="sidebar">
        <div className="sidebar-top">
            <div className="title">Dashboard</div>
            <div>{companyName}</div>
            <div className="sidebar-menu-item">General</div>
            <div className="sidebar-menu">
                <div className="sidebar-menu-item">Projects</div>
                <div className="btn">+</div>
            </div>
            <ul className="sidebar-ul">
                <li className="sidebar-menu-item">Project 1</li>
            </ul>
        </div>
        <div className="sidebar-bottom-menu sidebar-menu-item">Settings</div>
    </div>
  )
}

export default Sidebar