import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import Link from "next/link";


export async function Header() {
	const session = await auth();

	return (
		<nav className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
			<div className="flex lg:flex-1">
				<div>
					<h1 className="relative flex select-none flex-row items-baseline text-3xl font-bold">
						<span className="sr-only">MyMovieList</span>
						<span className="tracking-tight text-white cursor-pointer">
							mymovie<span className="text-primary ">list</span>
						</span>
					</h1>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-white">Item One</NavigationMenuTrigger>
								<NavigationMenuContent>
									<NavigationMenuLink>Link</NavigationMenuLink>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
			<div className="hidden flex-1 items-center justify-end gap-x-6 md:flex">
				<div className="flex items-center gap-4">
					<Button
						variant="default"
						size="lg"
					>
						<Link href="/sign-in">{session ? "Sign out" : "Sign in"}</Link>
					</Button>
				</div>
			</div>
		</nav>
	);
}