import { NextFunction, Request, Response } from "node_modules/@types/express";
import { Task } from "src/api/v1/models/taskModel";
import * as taskController from "../src/api/v1/controllers/taskController";
import * as taskService from "../src/api/v1/service/taskService";
import { mock } from "node:test";
import { HTTP_STATUS } from "../src/constants/httpConstants";

jest.mock("../src/api/v1/service/taskService");

describe("Task controller", () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(()=>{
        jest.clearAllMocks();

        mockReq = { params: {}, body: {} };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        mockNext = jest.fn();
    });

    describe("createTask", () => {
        it("should handle successful task creation", async () => {
            // Arrange
            const mockBody = {
                userId: "User1",
                title: "Test Title",
                priority: "medium",
                status: "open",
                dueDate: new Date(),
            };

            const mockTask: Task = {
                id: "hah_funny_id",
                updatedAt: new Date(),
                createdAt: new Date(),
                ...mockBody
            } as Task;

            mockReq.body = mockBody;
            (taskService.createTask as jest.Mock).mockReturnValue(mockTask);

            // Act
            await taskController.createTask(mockReq as Request, mockRes as Response, mockNext);

            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.CREATED);
            expect(mockRes.json).toHaveBeenCalledWith({
                message: "Task created successfully",
                data: mockTask,
                status: "success"
            });
        });
    });
});