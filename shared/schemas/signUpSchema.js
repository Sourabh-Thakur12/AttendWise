import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 charecter")
    .max(20, "Username must not exceed 20 charecter")
    .regex(/^[a-zA-Z0-9_]+$/, "Invalid Username")

export const signUpSchema = z.object({
    name:z.string().min(3, "Name should be at least 3 characters long"),
    username: usernameValidation,
    password: z.string().min(6, "Password should be at least 6 characters long"),
    email: z.email({message: "Invalid email address"})
})