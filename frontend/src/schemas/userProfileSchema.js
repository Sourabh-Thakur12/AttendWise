import {z} from 'zod';

const userProfileSchema = z.object({
    name:z.string().min(3, "Name should be atleast 3 char long"),
    username:z.string().min(3, "Username should be atleast 3 char long"),
    email:z.email(),
    course:z.string()
})