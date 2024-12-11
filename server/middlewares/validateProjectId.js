import Project from "../models/Project";

export const validateProjectId = (req,res,next)=> {
    const projectId = req.params;

    try {
        const projectExists = Project.findById(projectId);

        if (!projectExists) {
            return res.status(404).json({error: "Project not found"})
        }

        next();
    } catch (error) {
        console.log("Error in validation");
        res.status(500).json({ error: 'Internal Server Error.' });
    }
};