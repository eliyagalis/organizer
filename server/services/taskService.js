import Task from "../models/Task.js"

export const getAllTasks = async(projectId)=> {
    return await Task.find({ projectId });
}

export const getTaskById = async(taskId)=> {
    return await Task.findById(taskId);
}

export const createTask = async(title, description, status, projectId)=> {
    const newTask = new Task({
        title,
        description,
        status,
        projectId
    });

    return await newTask.save();
}