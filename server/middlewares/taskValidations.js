export const validateTask = (req, res, next) => {
    const { title, description, status } = req.body;
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

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};