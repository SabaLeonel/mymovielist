import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'


export function LoginPage() {

	return (
		<div className="flex w-full max-w-80 flex-col items-center justify-center gap-3">
			<div className="relative">
				<div className="relative min-h-[243px] w-full">
					<div className="flex flex-col items-center gap-4">
						<h1 className="mt-4 text-2xl font-semibold tracking-tight">
							<span className="tracking-tight text-white">
								Sign in to mymovie<span className="text-primary">list</span>
							</span>
						</h1>
						<h2 className=" text-gray-300 text-xs">Welcome back! Please sign in to continue</h2>
						<Button className="w-full h-11"
							variant="secondary"
						> Google</Button>
						<div className="flex items-center w-full">
							<hr className="flex-grow border-gray-300" />
							<span className="mx-2 text-gray-300 text-xs">or</span>
							<hr className="flex-grow border-gray-300" />
						</div>

						<Button className="w-full h-11"
							variant="default"
						><Mail /> Continue with Email</Button>

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