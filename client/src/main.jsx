import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dash from "./pages/Dash";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import axios from "axios";
import { UserProvider } from "./context/userContext";

axios.defaults.baseURL = "http://localhost:6060/api";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // </StrictMode>,
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </UserProvider>
);
