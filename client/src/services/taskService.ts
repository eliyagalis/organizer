import axios from "axios";

export const fetchTasks = async (projectId: string) => {
    try {
        return await axios.get(`${axios.defaults.baseURL}/tasks/project/${projectId}`).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

export const createTask = async (task: { title: string, description: string, status: string, projectId: string }) => {
    try {
        return await axios.post(`${axios.defaults.baseURL}/tasks`, task).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

export const updateTask = async (taskId: string, task: { title: string, description: string, status: string }) => {
    try {
        return await axios.put(`${axios.defaults.baseURL}/tasks/${taskId}`, task).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteTask = async (taskId: string) => {
    try {
        return await axios.delete(`${axios.defaults.baseURL}/tasks/${taskId}`).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

