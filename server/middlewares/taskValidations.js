export const validateTask = (req, res, next) => {
    const { title, description, status, projectId } = req.body;
    const errors = [];

    if (!title) {
        errors.push({ msg: "Title is required" });
    }

    if (description && typeof description !== "string") {
        errors.push({ msg: "Description must be a string" });
    }

    const validStatuses = ["pending", "in-progress", "completed"];
    if (!validStatuses.includes(status)) {
        errors.push({ msg: "Invalid status" });
    }

    const isValidMongoId = (id) => /^[a-f\d]{24}$/i.test(id);
    if (!isValidMongoId(projectId)) {
        errors.push({ msg: "Invalid project ID" });
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};