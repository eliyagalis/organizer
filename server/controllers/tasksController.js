import Project from "../models/Project.js";
import Task from "../models/Task.js";
import * as taskService from "../services/taskService.js";

export const getTasks = async (req,res)=> {
    try {
        const {projectId} = req.params;
        const tasks = taskService.getAllTasks(projectId);
        return res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({ error: "Error in fetching tasks" });
    }
}

export const createTask = async (req,res)=> {
    try {
        const projectId = req.params.projectId;
        const {title, description, status} = req.body;

        const createdTask = taskService.createTask(title, description, status, projectId);
        res.status(201).json(createdTask);
        
    } catch (error) {
        console.log("Error in creating", error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
}

export const getTaskById = async (req,res)=> {
    try {        
        const {taskId} = req.params;

        const requestedTask = taskService.getTaskById(taskId);

        if (!requestedTask) {
            return res.status(404).json({error: "Task not found"});
        }
        return res.status(200).json(requestedTask);
    } catch (error) {
        console.log("Error in get request", error);
        res.status(500).json({ error: "Error in fetching single task" });
    }
}

export const updateTask = async (req, res) => {
    try {
        const id = req.params.taskId;
        const { title, status, description } = req.body;

        if (!isValidStatus(status)) {
            return res.status(400).json({ "error": "Invalid status provided" });
        }

        if (!title) {
            return res.status(400).json({ "error": "Name is required" });
        }

        const updateFields = {};
        updateFields.title = title;
        updateFields.status = status;
        if (description) updateFields.description = description;

        if (Object.keys(updateFields).length === 0) {
            return res.status(400).json({ "error": "No valid fields provided for update" });
        }

        const updatedTask = await Task.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedTask) {
            console.log(id);
            return res.status(404).json({ "error": "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.log("Error updating task:", error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.taskId;

        if (!id) {
            return res.status(400).json({ "error": "Invalid Task ID" });
        }

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ "error": "Task not found" });
        }

        res.status(200).json({ "message": "Task deleted successfully" });
    } catch (error) {
        console.log("Error deleting task:", error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
}