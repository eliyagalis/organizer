import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060/api";
axios.defaults.withCredentials = true;

export const login = async (username: string, password: string) => {
    try {
        const user = { username, password };
        const { data } = await axios.post("/users/login", user);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Login failed");
    }
};

export const signup = async (email: string, username: string, password: string) => {
    try {
        const newUser = { email, username, password };
        const { data } = await axios.post("/users/signup", newUser);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Signup failed");
    }
};

export const logout = async () => {
    try {
        await axios.post("/users/logout");
    } catch (error) {
        console.error("Logout failed", error);
    }
};

export const getCurrentUser = async () => {
    try {
        const { data } = await axios.get("/users/auth");
        return data;
    } catch (error) {
        return null;
    }
};