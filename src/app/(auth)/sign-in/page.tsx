import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import { LoginButton } from "@/components/auth/login-button"
import { Social} from "@/components/auth/social"


export function LoginPage() {

	return (
		<div className="flex w-full max-w-64 flex-col items-center justify-center gap-3">
			<div className="relative min-h-[243px] w-full">
				<div className="flex flex-col items-center gap-4">
					<h1 className="mt-4 text-2xl font-semibold tracking-tight">
						<span className="tracking-tight text-white">
							Log in to mymovie<span className="text-primary">list</span>
						</span>
					</h1>
					<p className=" text-gray-300 text-sm text-center">Welcome back !</p>
					<Social />
					<div className="flex items-center w-full">
						<hr className="flex-grow border-gray-300" />
						<span className="mx-2 text-gray-300 text-xs">or</span>
						<hr className="flex-grow border-gray-300" />
					</div>
					<LoginButton>
					<Button className="w-full"
						variant="default"
					><Mail />Continue with Email</Button></LoginButton>
					<div className="mt-4 text-center text-xs text-gray-500">
						By signing up, you agree to our Privacy Policy and Terms of Service.
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Page() {
	return (
		<div>
			<LoginPage />
		</div>
	);
}