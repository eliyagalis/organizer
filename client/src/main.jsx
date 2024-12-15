import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route path="/panel" element={<Dashboard />} />
      </Routes>
    </Router>
)