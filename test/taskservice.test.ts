import * as TaskService from "../src/api/v1/service/taskService";
import * as firestoreRepository from "../src/api/v1/repositories/firestoreRepository";
import { Task } from "src/api/v1/models/taskModel";

jest.mock("../src/api/v1/repositories/firestoreRepository");

describe("Item Service", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should create an item successfully", async () => {
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
            dueDate: 01/20/2000,
        }
    })