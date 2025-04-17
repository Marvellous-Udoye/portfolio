import { z } from "zod";

export const ImageAdSchema = z.object({
  username: z
    .string()
    .min(8, "Username must be at least 8 characters")
    .max(20, "Username cannot exceed 20 characters")
    .nonempty("Username is required"),
});
