import { useState, useContext } from 'react';
import '../styles/LoginStyle.css';
import { UserContext } from '../context/userContext';
import { login, signup } from '../services/userService';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const { setUserData } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await signup({username, email, password});
            setUserData(res.data.user);
            navigate('/dash');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="signup page">
            <form onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;