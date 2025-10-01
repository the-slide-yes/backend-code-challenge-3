import * as TaskService from "../src/api/v1/service/taskService";
import * as firestoreRepository from "../src/api/v1/repositories/firestoreRepository";
import { Task } from "src/api/v1/models/taskModel";

jest.mock("../src/api/v1/repositories/firestoreRepository");

describe("Task Service", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should create an item successfully", async () => {
        // Arrange
        const mockTaskData: {
            userId: string;
            title: string;
            priority: "low" | "medium" | "high";
            status: "open" | "in-progress" | "completed";
            dueDate: Date;
        } = {
            userId: "User1",
            title: "Test Title",
            priority: "medium",
            status: "open",
            dueDate: new Date(),
        };

        const mockDocumentId: string = "test-task-ID";

        (firestoreRepository.createDocument as jest.Mock).mockResolvedValue(mockDocumentId);

        // Act
        const result: Task = await TaskService.createTask(mockTaskData);

        // Assert
        expect(firestoreRepository.createDocument).toHaveBeenCalledWith("tasks", expect.objectContaining({
            userId: mockTaskData.userId,
            title: mockTaskData.title,
            priority: mockTaskData.priority,
            status: mockTaskData.status,
            dueDate: mockTaskData.dueDate,
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
        }));

        expect(result.id).toBe(mockDocumentId);
        expect(result.userId).toBe(mockTaskData.userId);
    });

});