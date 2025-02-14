import Task from "../models/Task.js"

export const getAllTasks = async(projectId)=> {
    const tasks = await Task.find({ projectId });
    return tasks;
};

export const getTaskById = async(taskId)=> {
    return await Task.findById(taskId);
};

export const createTask = async(title, description, status, projectId)=> {
    const newTask = new Task({ title, description, status, projectId });
    return await newTask.save();
};

export const updateTask = async(taskId, title, description, status)=> {
    const task = await Task.findById(taskId);
    if (!task) throw new Error("Task not found");

    task.title = title;
    task.description = description;
    task.status = status;

    return await task.save();
};

export const deleteTask = async(taskId)=> {
    return await Task.findByIdAndDelete(taskId);
}