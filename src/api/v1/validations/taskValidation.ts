import Joi from "joi";

export const taskSchemas = {
    // POST
    create: {
        body: Joi.object({
            userId: Joi.string().required().messages({
                "any.required": "userId is required",
                "string.empty": "userId cannot be empty",
            }),
            title: Joi.string().required().messages({
                "any.required": "title is required",
                "string.empty": "title cannot be empty",
            }),
            priority: Joi.string().valid("low", "medium", "high").required().messages({
                "any.rquired": "priority is required",
                "string.invalid": "priority set to invalid value"
            }),
            status: Joi.string().valid("open", "in-progress", "completed").required().messages({
                "any.rquired": "status is required",
                "string.invalid": "status set to invalid value"
            }),
            dueDate: Joi.date().required().messages({
                "any.required": "dueDate is required",
                "date.empty": "dueDate cannot be empty",
            }),
        })
    }
};