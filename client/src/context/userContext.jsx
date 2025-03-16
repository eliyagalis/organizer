import { createContext, useContext, useEffect, useState } from "react";
import { login, signup, logout, getCurrentUser } from "../services/userService";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    checkUser();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const data = await login(username, password);
      setUser(data.user);
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  const handleSignup = async (email, username, password) => {
    try {
      const data = await signup(email, username, password);
      setUser(data.user);
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login: handleLogin, signup: handleSignup, logout: handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
