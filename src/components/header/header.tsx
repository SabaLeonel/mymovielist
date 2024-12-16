

import { MobileNav } from "@/components/header/mobile-nav"
import { SiteNav } from "@/components/header/nav-menu"
import { SearchInput } from "@/components/header/search-input"
import { SiteSettings } from "@/components/header/settings"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export const Header = () => {

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background backdrop-blur-xl">
			<div className="container flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
				<SiteNav />
				<div className="flex flex-1 justify-end gap-2">
					<Suspense fallback={<Skeleton className="h-10 w-60" />}>
						<SearchInput />
					</Suspense>
					<SiteSettings />

					<div className="lg:hidden">
						<MobileNav />
					</div>
				</div>
			</div>
		</header>
	)
}