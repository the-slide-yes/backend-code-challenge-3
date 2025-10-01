import {
    QuerySnapshot,
    DocumentData,
    DocumentSnapshot,
} from "firebase-admin/firestore";
import { Task } from "../models/taskModel";
import { createDocument } from "../repositories/firestoreRepository";

const COLLECTION: string = "tasks";

export const createTask = async (taskData: {
            userId: string;
            title: string;
            priority: "low" | "medium" | "high";
            status: "open" | "in-progress" | "completed";
            dueDat: Date;
            }): Promise<Task> => {
                try {
                    const dateNow = new Date();
                    const newTask: Partial<Task> = {
                        ...taskData,
                        createdAt: dateNow,
                        updatedAt: dateNow,
                    };

                    const taskId: string = await createDocument<Task>(COLLECTION, newTask);

                    return structuredClone({id: taskId, ...newTask} as Task);
                } catch (error:unknown){
                    throw error;
                }
            }