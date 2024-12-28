import { Header } from "@/components/header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<Header />
			<div className="relative flex-1 py-4">
				<div className="container flex h-[40vh] items-end justify-center">
					<div className="text-center">
						<h1 className="text-4xl">404</h1>
						<p className="text-muted-foreground mt-4">
							The page you are looking for does not exist.
							<br />
							Please go back to the homepage.
						</p>
						<Button asChild
							variant="default"
							className="mt-6"
						>
							<Link href="/">Go Home</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
