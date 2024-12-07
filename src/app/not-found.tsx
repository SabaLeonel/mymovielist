import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Header } from "@/components/header/header"

export default function NotFound() {
	return (
		<div>
			<Header />
			<div className="relative flex-1 py-4">
				<div className="container flex h-[40vh] items-end justify-center">
					<div className="text-center">
						<h1 className="text-2xl">404</h1>
						<p className="text-muted-foreground">
							The page you are looking for does not exist.
							<br />
							Please go back to the homepage.
						</p>
						<a
							href="/"
							className={cn(buttonVariants({ variant: "default" }), "mt-6")}
						>
							Go Home
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
