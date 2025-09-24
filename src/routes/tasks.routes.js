import { Router } from "express";
import * as controller from "../controllers/tasks.controller.js";

const router = Router();

router.get("/", controller.getAllTasks);
router.get("/:id", controller.getTask);
router.post("/", controller.createTask);
router.patch("/:id/title", controller.updateTaskTitle);
router.patch("/:id/completed", controller.updateTaskCompleted);
router.delete("/:id", controller.removeTask);


export default router;