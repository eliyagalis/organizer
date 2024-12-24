import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:6060/api/v1';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
)