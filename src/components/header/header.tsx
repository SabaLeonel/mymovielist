

import { Skeleton } from "@/components/ui/skeleton"
import { SiteNav } from "@/components/header/nav-menu"
import { Suspense } from "react"
import { SearchInput } from "@/components/header/search-input"

export const Header = () => {

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
				<SiteNav />

				<div className="flex flex-1 justify-end gap-2">
					<Suspense fallback={<Skeleton className="h-10 w-60" />}>
						<SearchInput />
					</Suspense>

					{/* <SiteSettings />

					<div className="lg:hidden">
						<SiteMenu />
					</div> */}
				</div>
			</div>
		</header>

		/* <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
			<div className="flex lg:flex-1">
				<div>
					<h1 className="relative flex select-none flex-row items-baseline text-3xl font-bold">
						<span className="sr-only">MyMovieList</span>
						<span className="tracking-tight text-white cursor-pointer">
							mymovie<span className="text-primary ">list</span>
						</span>
					</h1>
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
		</nav> */

	)
}