import { useState } from "react";
import "../styles/LoginStyle.css";
import { Link, useNavigate } from "react-router";
import { useUser } from "../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="register-form">
        <form onSubmit={handleSignup}>
        <div className="headline1">Sign Up</div>
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
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
            Sign Up
          </button>
          <div className="divider"/>
          <p>Have an account?</p>
          <button type="button" className="green" onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
