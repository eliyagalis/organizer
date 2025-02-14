import Project from "../models/Project.js";
import User from "../models/User.js";

export const getProjects = async (userId) => {
    return await Project.find({ userId });
};

export const getProjectById = async (projectId) => {
    return await Project.findById(projectId);
};

export const createProject = async (userId, name, description) => {
    const newProject = new Project({
        name,
        userId,
        tasks: [],
        ...(description && { description })
    });

    const savedProject = await newProject.save();

    const user = await User.findById(userId);
    user.projects.push(savedProject._id);
    await user.save();

    return savedProject;
};

export const updateProject = async (projectId, updateData) => {
    const updatedProject = await Project.findByIdAndUpdate(projectId, updateData, { new: true });
    if (!updatedProject) {
        throw new Error("Project not found");
    }
    return updatedProject;
};

export const deleteProject = async (projectId) => {
    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (!deletedProject) {
        throw new Error("Project not found");
    }

    const userId = deletedProject.userId;
    await User.findByIdAndUpdate(userId, { $pull: { projects: projectId } });

    return deletedProject;
};