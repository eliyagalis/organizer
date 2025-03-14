import { useState } from "react";
import "../styles/LoginStyle.css";
import { Link, useNavigate } from "react-router";
import { useUser } from "../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const { signup } = useUser();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, username, password);
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSignup} className="register-form">
        <div className="headline1">Sign Up</div>
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
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <input
            className="register-input"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
            Sign Up
          </button>
        </div>
        Already have an account?{" "}
        <Link to="/login">Log In</Link>
      </form>
    </div>
  );
};

export default SignUp;
