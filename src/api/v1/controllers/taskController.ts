import { NextFunction, Request, Response } from "node_modules/@types/express";
import { Task } from "../models/taskModel";
import * as taskService from "../services/taskService";

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
    } catch (error) {
        next(error);
    }
};