import { type } from "arktype";

export const leadSchema = type({
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    linkedIn: 'string',
    visas: 'Array',
    resume: 'File',
    status: 'string',
    additionalInfo: 'string?'
});