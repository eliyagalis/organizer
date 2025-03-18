import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='footer-container'>
        <footer className='footer'>
            <Link className='footer-title' to="/">organizer</Link>
            <div className='footer-links'>
            </div>
        </footer>
    </div>
  )
}

export default Footer