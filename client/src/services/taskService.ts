import axios from "axios";

export const fetchTasks = async (projectId: string) => {
    try {
        return await axios.get(`${axios.defaults.baseURL}/tasks/project/${projectId}`).then((res) => res);
    } catch (error) {
        throw new Error(error);   
    }
}