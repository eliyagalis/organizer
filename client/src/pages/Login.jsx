import { useState } from "react";
import "../styles/LoginStyle.css";
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
      await login(username, password);
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <form onSubmit={handleSignup}>
          <div className="headline1">Log In</div>
          <div>
            <input
              className="register-input"
              id="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
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
            <button type="submit" className="blue">
              Login
            </button>
            <div className="divider" />
            <p>Don't have an account?</p>
            <button type="button" className="green" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;