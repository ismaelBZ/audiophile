import {z} from "zod";

const validator = {
    name: /[A-za-z0-9]+ [A-za-z0-9]+/g,
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    phone: /^\+\(\d{2}\) \d{3}-\d{3}-\d{4}$/,
    zip: /^\d{5}(-\d{4})?$/

}

export const  CheckoutSchema = z.object({
    name: z.string().min(3, "Name must have at least 3 characteres.").regex(validator.name, "Please, type your full name."),
    email: z.string().email("Please, give a valid email."),
    phone: z.string().regex(validator.phone, "The phone number format is invalid."),
    address: z.string().min(3, "Please provide your address."),
    zipCode: z.string().regex(validator.zip, "Please, give a valid ZIP code."), 
    city: z.string().min(3, "Please provide your city."),
    country: z.string().min(3, "Please provide your country."),
    paymentMethod: z.string(),
    eMoneyNumber: z.string().length(9, "e-Money number must have 9 digits").optional(),
    eMoneyPin: z.string().length(4, "Pin must have 4 digits").optional()

})

export type CheckoutSchema_T = z.infer<typeof CheckoutSchema>