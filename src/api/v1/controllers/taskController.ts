import { NextFunction, Request, Response } from "node_modules/@types/express";
import { Task } from "../models/taskModel";
import * as taskService from "../service/taskService";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { successResponse } from "../models/responseModel";

export const createTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {
            userId,
            title,
            priority,
            status,
            dueDate
        } = req.body;

        const newTask: Task = await taskService.createTask({ userId, title, priority, status, dueDate });
        res.status(HTTP_STATUS.CREATED).json(successResponse(newTask, "Task created successfully"));
    } catch (error) {
        next(error);
    }
};