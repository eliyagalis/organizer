import axios from "axios";

export const fetchProjects = async (userId: string) => {
    try {
        return await axios.get(`${axios.defaults.baseURL}/projects/user/${userId}`).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

export const fetchProjectById = async (projectId: string) => {
    try {
        return await axios.get(`${axios.defaults.baseURL}/projects/${projectId}`).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

export const createProject = async (project: { userId: string, name: string, description?: string }) => {
    try {
        return await axios.post(`${axios.defaults.baseURL}/projects`, project).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

export const updateProject = async (projectId: string, project: { name?: string, description?: string }) => {
    try {
        return await axios.put(`${axios.defaults.baseURL}/projects/${projectId}`, project).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteProject = async (projectId: string) => {
    try {
        return await axios.delete(`${axios.defaults.baseURL}/projects/${projectId}`).then((res) => res);
    } catch (error) {
        throw new Error(error);
    }
};
