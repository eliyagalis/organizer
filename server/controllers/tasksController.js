import Task from "../models/Task.js";

// Validations
const validateTaskId = (id)=> {
    return mongoose.Types.ObjectId.isValid(id);
}
const validateStatus = (status)=> {
    const validStatuses = ["pending", "in-progress", "completed"];
    return validStatuses.includes(status);
}

// Functions
export const getTasks = async (req,res)=> {
    try {
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
    } catch (error) {
        console.log("Error in get request", error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
};
export const getTaskById = async (req,res)=> {
    try {
        const {id} = req.params;

        if (!validateTaskId(id)) {
            return res.status(400).json({"error":"Id not valid"});
        }

        const requestedTask = await Task.findById(id);

        if (!requestedTask) {
            return res.status(404).json({"error": "Task not found"});
        }

        return res.status(200).json(requestedTask);
    } catch (error) {
        console.log("Error in get request", error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
};
export const createTask = async (req,res)=> {
    try {
        const {title, description, status} = req.body;

        if (!title)  {
            return res.status(400).json({"error": "Empty required fields"});
        }

        // if (!validateStatus(status)) {
        //     return res.status(400).json({"error": "Status not valid"});
        // }

        const createdTask = new Task({
            title,
            description,
            status
        });

        await createdTask.save();

        res.status(201).json(createdTask);
        
    } catch (error) {
        console.log("Error in creating", error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
};
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, name, description } = req.body;

        if (!validateTaskId(id)) {
            return res.status(404).json({"error": "Task not found"})
        }

        if (!validateStatus(status)) {
            return res.status(400).json({ "error": "Invalid status provided" });
        }

        if (!name) {
            return res.status(400).json({ "error": "Name is required" });
        }

        const updateFields = {};
        if (status) updateFields.status = status;
        if (name) updateFields.name = name;
        if (description) updateFields.description = description;

        if (Object.keys(updateFields).length === 0) {
            return res.status(400).json({ "error": "No valid fields provided for update" });
        }

        const updatedTask = await Task.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ "error": "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.log("Error updating task:", error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
};
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        if (!validateTaskId(id)) {
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
};