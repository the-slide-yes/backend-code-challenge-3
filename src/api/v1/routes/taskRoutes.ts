import { Router } from "express";
import * as taskController from "../controllers/taskController";
import { validateRequest } from "../middleware/validate";
import { taskSchemas } from "../validations/taskValidation";

const router: Router = Router();

router.post("/", validateRequest(taskSchemas.create), taskController.createTask);

export default router;