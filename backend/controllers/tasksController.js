const tasks = {
    1: {
        id: 1,
        name: 'Complete Project Setup',
        description: 'Initialize the project repository and set up initial configurations',
        status: 'In Progress',
        manager: 'eliya',
        startDate: '2024-12-01',
        priority: 'High',
        dueDate: '2025-02-15'
    },
    2: {
        id: 2,
        name: 'Design Database Schema',
        description: 'Create detailed database schema for the project',
        status: 'Pending',
        manager: 'bob',
        startDate: '2024-12-02',
        priority: 'Medium',
        dueDate: '2025-02-20'
    }
};

const generateId = () => {
    return Math.max(...Object.keys(tasks).map(Number)) + 1;
};

// Get all tasks
export const getTasks = (req, res) => {
    try {
        const taskList = Object.values(tasks);
        res.json(taskList);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks' });
    }
};

// Get a single task by ID
export const getTask = (req, res) => {
    try {
        const taskId = parseInt(req.params.id);
        const task = tasks[taskId];
        
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task' });
    }
};

// Add a new task
export const createTask = (req, res) => {
    try {
        const { name, description, status } = req.body;

        // Validate input
        if (!name) {
            return res.status(400).json({ message: 'Task name is required' });
        }

        const newTask = {
            id: generateId(),
            name,
            description: description || '',
            status: status || 'Pending'
        };

        tasks[newTask.id] = newTask;
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task' });
    }
};

// Update a task
export const updateTask = (req, res) => {
    try {
        const taskId = parseInt(req.params.id, 10);
        const { name, description, status } = req.body;

        // Check if task exists
        const existingTask = tasks[taskId];
        if (!existingTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Update task fields (only update fields that are provided)
        const updatedTask = {
            id: taskId,
            name: name || existingTask.name,
            description: description || existingTask.description,
            status: status || existingTask.status
        };

        // Save the updated task
        tasks[taskId] = updatedTask;

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task' });
    }
};

// Delete a task
export const deleteTask = (req, res) => {
    try {
        const taskId = parseInt(req.params.id);

        // Check if task exists
        if (!tasks[taskId]) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Delete the task
        delete tasks[taskId];
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task' });
    }
};