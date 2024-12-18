import Project from "../models/Project.js";
import User from "../models/User.js";

// /:userId/projects route
export const getProjects = async (req,res)=> {
    try {
        const userId = req.params.userId;

        const user = await User.findById(userId);
        
        if(!user) {
            return res.status(404);
        }

        const projects = await Project.find({ userId});
        
        return res.status(200).json(projects);
    
    } 
    catch (error) {
        console.log("Error in get request", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const createProject = async (req,res)=> {
    try {
        const userId = req.params.userId;
        const { name, ...otherFields } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({error: "user not found"});
        }

        if (!name) {
            return res.status(400).json({error: "Project name is required"});
        }

        console.log('name valid');

        const newProject = new Project({
            name,
            ...otherFields,
            userId,
            tasks: [],
        })

        const savedProject = await newProject.save();

        user.projects.push(savedProject._id);
        await user.save();

        res.status(201).json(savedProject);

    } catch (error) {
        console.log("Error in creating", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
// /projects route
export const getProjectById = async (req,res)=> {
    try {
        const projectId = req.params.projectId;

        const project = await Project.find({ projectId });
        
        if(!project) {
            return res.status(404).json({error: "Project was not found"});
        }
        
        res.status(200).json(project);

    } catch (error) {
        console.log("Error in get request id", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const updateProject = async (req,res)=> {
    try {
        const projectId = req.params.projectId;

        const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, { new: true });
        
        if (!updatedProject) {
            return res.status(404).json({ error: "Project not found" });
        }

        res.status(200).json(updatedProject);

    } catch (error) {
        console.log("Error in updating", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const deleteProject = async (req,res)=> {
    try {
        const projectId = req.params.projectId;
        
        const deletedProject = await Project.findByIdAndDelete(projectId);
        
        if (!deletedProject){
            return res.status(404).json({error: "Project not found"});
        }
        
        const userId = deleteProject.userId;
        
        await User.findByIdAndUpdate(userId, { $pull: { projects: projectId }});

        res.status(200).json({ message: "Project deleted successfully"});

    } catch (error) {
        console.log("Error in deleting", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};