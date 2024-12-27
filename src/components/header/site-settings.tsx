
import { auth } from "@/server/auth";
import { SignOut } from "@/components/auth/sign-out";
import { SignIn } from "@/components/auth/sign-in";

export const SiteSettings = async () => {
	const session = await auth();

	return (
		session ? (<SignOut />) : (<SignIn />)
	);
}