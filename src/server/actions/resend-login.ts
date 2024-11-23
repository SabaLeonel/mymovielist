"use server";

import { signIn } from "@/server/auth/index";

export default async function resendLogin(formData: FormData) {
	console.log("resendLogin", formData);
	await signIn("mailgun", { formData });
}