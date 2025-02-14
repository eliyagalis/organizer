export const validateProject = async (req, res, next) => {
    const { name, userId } = req.body;
    const errors = [];

    if (!name) {
        errors.push({ msg: "Name is required" });
    }

    const isValidMongoId = (id) => /^[a-f\d]{24}$/i.test(id);
    if (!isValidMongoId(userId)) {
        errors.push({ msg: "Invalid project ID" });
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
}