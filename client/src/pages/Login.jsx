import { useState } from "react";
import "../styles/LoginStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { useUser } from "../context/userContext";

const Login = () => {
  const { login } = useUser();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await login(username, password) && navigate("/dashboard");
      
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSignup} className="register-form">
        <div className="headline1">Login</div>
        <div>
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            className="register-input"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
        <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input
            className="register-input"
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="submit btn">
            Login
          </button>
        </div>
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
