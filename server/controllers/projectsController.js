import Project from "../models/Project"

export const getProjects = async (req,res)=> {
    try {
        const projects = await Project.find({});
        res.status(200).json(projects);
    
    } catch (error) {
        console.log("Error in get request", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getProjectById = async (req,res)=> {
    try {
        const { projectId  } = req.params;

        if (!projectId){
            return res.status(400).json({error: "Id is not valid"});
        }
        
        const requestedProject = await Project.findById(projectId );
        
        if(!requestedProject){
            return res.status(404).json({error: "Project was not found"});
        }
        
        res.status(200).json(requestedProject);

    } catch (error) {
        console.log("Error in get request id", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const createProject = async (req,res)=> {
    try {
        const { name, ...otherFields } = req.body;

        if (!name) {
            return res.status(400).json({error: "Project name is required"});
        }

        const newProject = new Project({
            name,
            ...otherFields
        })

        await newProject.save();

        res.status(201).json(newProject);

    } catch (error) {
        console.log("Error in creating", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateProject = async (req,res)=> {
    try {
        const { id } = req.params;
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedProject) {
            return res.status(404).json({ error: "Project not found" });
        }

        res.status(200).json(updatedProject);

    } catch (error) {
        console.log("Error in updating", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteProject = async (req,res)=> {
    try {
        const { id } = req.params.id;

        if (!id){
            return res.status(400).json({error: "Id is not valid"});
        }

        const result = await Project.findByIdAndDelete(id);

        if (!result){
            return res.status(404).json({error: "Project not found"});
        }

        return res.status(200).json({ message: "Project deleted successfully"});

    } catch (error) {
        console.log("Error in deleting", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}