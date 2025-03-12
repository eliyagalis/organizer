import Project from "../models/Project.js";
import * as taskService from "../services/taskService.js";

export const getTasks = async (req,res)=> {
    try {
        const { projectId } = req.params;
        const tasks = await taskService.getAllTasks(projectId);
        return res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error in fetching tasks" });
    }
};

export const getTaskById = async (req,res)=> {
    try {        
        const {taskId} = req.params;
        const requestedTask = taskService.getTaskById(taskId);
        if (!requestedTask) {
            return res.status(404).json({error: "Task not found"});
        }       
        return res.status(200).json(requestedTask);
    } catch (error) {
        res.status(500).json({ error: "Error in fetching single task" });
    }
};

export const createTask = async (req,res)=> {
    try {
        const { projectId, title, description, status } = req.body;

        const createdTask = taskService.createTask(title, description, status, projectId);
        res.status(201).json(createdTask);
        
    } catch (error) {
        res.status(500).json({ error: "Error in task creation" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { taskId, title, status, description } = req.body;
        const updatedTask = await taskService.updateTask(taskId, title, description, status);
        
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Error in task updating" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;

        const deletedTask = taskService.deleteTask(taskId);
        if (!deletedTask) {
            return res.status(404).json({ "error": "Task not found" });
        }

        // Should be moved to projectService!
        const project = await Project.findById(deletedTask.projectId);
        project.tasks.pull(deletedTask._id); 
        // Should be moved to projectService!

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error in task deletion" });
    }
};