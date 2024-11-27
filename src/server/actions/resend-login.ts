import { signIn } from "next-auth/react";

export default async function resendLogin(formData: FormData) {
	const email = formData.get("email") as string;
	try {
		await signIn("mailgun", {  email: email });
	}
	catch (error) {
		console.error(error);
	}
}