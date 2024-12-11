import React, { useEffect, useState } from 'react';
import users from '../data/users.js';
import axios from 'axios';

const LoginPanel = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        console.log("Current user state:", user);
    }, [user]);

    const handleInputChange = (e) => {
        const { id, value } = e.target; // Destructure id (username or password) and value
        setUser((prevState) => ({
            ...prevState,
            [id]: value // Dynamically update the relevant field based on input id
        }));
        const userFound = users.find(
            (u) => u.username === user.username && u.password === user.password
        );
        setIsValid(!!userFound);
    };

    const handleSubmit = (e) => {
        const { id, value } = e.target; // Destructure id (username or password) and value

        // Update the state
        setUser((prevState) => ({
            ...prevState,
            [id]: value // Dynamically update the relevant field
        }));

        // Validate using the updated value
        const updatedUser = { ...user, [id]: value }; // Create a new object with the updated field
        const userFound = users.find(
            (u) => u.username === updatedUser.username && u.password === updatedUser.password
        );
        setIsValid(!!userFound);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    className="my-input"
                    type="text"
                    placeholder="Enter a username"
                    value={user.username} // Bind input value to state
                    onChange={handleInputChange} // Update state on input change
                />
                <br />

                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    className="my-input"
                    type="password"
                    placeholder="Enter a password"
                    value={user.password} // Bind input value to state
                    onChange={handleInputChange} // Update state on input change
                />

{
                    !isValid ? (
                        <div className="error">Invalid username or password</div>
                    ) : (
                        <div className="success">Credentials are valid</div>
                    )
                }

                <div className="center">
                    <button className="my-button" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPanel