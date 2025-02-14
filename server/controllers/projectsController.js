import * as projectService from "../services/projectService.js";

export const getProjects = async (req,res)=> {
    try {
        const { userId } = req.params;
        const projects = await projectService.getProjects(userId);
        return res.status(200).json(projects);
    } 
    catch (error) {
        res.status(500).json({ error: "Error in fetching projects" });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await projectService.getProjectById(projectId);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: "Error in fetching a project" });
    }
};

export const createProject = async (req, res) => {
    try {
        const { userId, name, description } = req.body;
        const savedProject = await projectService.createProject(userId, name, description);
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(500).json({ error: "Error in creating new project" });
    }
};

export const updateProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const updatedProject = await projectService.updateProject(projectId, req.body);
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: "Error in updating project" });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        await projectService.deleteProject(projectId);
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error in deleting project" });
    }
};