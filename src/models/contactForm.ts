import { FORM_ERROR_MESSAGES } from "@/constants/formErrorMessages";
import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.required)
    .max(40, { message: FORM_ERROR_MESSAGES.tooLong })
    .trim(),
  email: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.required)
    .max(40, { message: FORM_ERROR_MESSAGES.tooLong })
    .email()
    .trim(),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid number" })
    .optional(),
  message: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.required)
    .max(5000, { message: FORM_ERROR_MESSAGES.tooLong })
    .trim(),
});

export type CreateContactData = z.infer<typeof contactFormSchema>;
