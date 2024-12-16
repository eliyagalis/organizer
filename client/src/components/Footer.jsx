import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='footer-container'>
        <footer className='footer'>
            <Link className='footer-title' to="/">organizer</Link>
            <p>2024 organizer.io - All rights reserved</p>
            <div className='footer-links'>
                <h2></h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer