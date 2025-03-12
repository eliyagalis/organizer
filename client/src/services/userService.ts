import axios from "axios";

export const login = async (newUser: object) => {
    try {
        return await axios.post(`${axios.defaults.baseURL}/users/login`, {newUser}, {withCredentials: true}).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

export const signup = async (newUser: object) => {
    try {
        return await axios.post(`${axios.defaults.baseURL}/users/signup`, {newUser}, {withCredentials: true}).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};