import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";
import { auth } from "@/server/auth";


export const SiteSettings = async () => {
	const session = await auth()

	return (
		<div className="hidden lg:flex">

			{session ? (
				<SignOut />

			) : (
				<SignIn />
			)}
		</div>
	)
}
