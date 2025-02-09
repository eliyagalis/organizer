import { body, validationResult } from "express-validator";

export const validateTask = [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").optional().isString().withMessage("Description must be a string"),
    body("status").isIn(["pending", "in-progress", "completed"]).withMessage("Invalid status"),
    body("projectId").isMongoId().withMessage("Invalid project ID"),(req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }
]