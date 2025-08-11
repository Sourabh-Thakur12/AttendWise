// OTP verification Schema
import {z} from 'zod';

export const otpVerificationSchema = z.object({
    otp:z.string().min(6, "OTP must be 6 digits long").max(6, "OTP must be 6 digits long")
})