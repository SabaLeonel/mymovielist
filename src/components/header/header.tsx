

import { MobileNav } from "@/components/header/mobile-nav"
import { SiteNav } from "@/components/header/nav-menu"
import { SearchInput } from "@/components/header/search-input"
import { SiteSettings } from "@/components/header/settings"
import { AuthComponent } from "@/components/auth/auth-component"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export const Header = () => {

	return (
		<header className="bg-background sticky top-0 z-40 w-full border-b backdrop-blur-xl">
			<div className="container flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
				<SiteNav />
				<div className="flex flex-1 justify-end gap-2">
					<Suspense fallback={<Skeleton className="h-10 w-60" />}>
						<SearchInput />
					</Suspense>
					<div className="hidden lg:flex">
						<AuthComponent />
					</div>
					<div className="lg:hidden">
						<MobileNav />
					</div>
				</div>
			</div>
		</header>
	)
}