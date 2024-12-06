import { LoginSchema } from '@/server/schemas/auth';
import { signIn } from "next-auth/react";
import * as z from "zod";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.parse(values);

	if (!validatedFields.email)
		return { error: "Invalid Email!" };

	const { email } = validatedFields;

	try {

		await signIn("mailgun", {
			email: email,
			callbackUrl: "/"
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "EmailSignInError":
					return { error: "An error occurred while signing in with the email." };
				default:
					return { error: "Something went wrong!" };
			}
		}
		throw error;
	}
}