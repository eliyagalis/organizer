const projects = {
    1: {
        id: 1,
        title: "Project Alpha",
        manager: "Eliya Galis",
        startDate: new Date('2024-08-11'),
        tasks: [1, 2, 3],
        description: 'Initial project development phase',
        priority: 'High',
        estimatedEndDate: new Date('2024-12-31')
    },
    2: {
        id: 2,
        title: "Project Beta",
        manager: "Eliya Galis",
        startDate: new Date('2024-09-11'),
        tasks: [4],
        description: 'Ongoing development and implementation',
        priority: 'Medium',
        estimatedEndDate: new Date('2025-02-15')
    },
    3: {
        id: 3,
        title: "Project Gamma",
        manager: "Eliya Galis",
        startDate: new Date('2024-10-11'),
        tasks: [5, 6],
        description: 'Upcoming project in initial stages',
        priority: 'Low',
        estimatedEndDate: new Date('2025-03-30')
    }
};

export const getProjects = (req,res) =>{
    try {
        const projectList = Object.values(projects);
        res.json(projectList);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks' });
    }
}

export const getProject = (req, res) => {
    try{
        const projectId = parseInt(req.params.id);
        const project = projects[projectId];

        if (project) {
            res.json(project);
        }

        else {
            res.status(404).json({ error: "Project not found" });
        }
    }
    catch (error){
        res.status(404).json({message: 'Error fetching project'});
    }
}

export const createProject = (req,res) =>{
    const [ title, ] = req.body;
}