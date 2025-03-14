import express from "express";
import * as userController from "../controllers/usersController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, userController.getUsers);
router.get("/:id", verifyToken, userController.getUserById);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.put("/:id", verifyToken, userController.updateUser);
router.delete("/:id", verifyToken, userController.deleteUser);
router.get("auth", verifyToken, userController.auth);

export default router;