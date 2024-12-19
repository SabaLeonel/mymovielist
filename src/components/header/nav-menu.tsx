"use client"

import { NavItem, navigation } from "@/config"
import { useActiveNav } from "@/hooks"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const SiteNav = () => {
	return (
		<div className="flex items-center">
			<Link href="/">
				<h1 className="text-xl font-bold">
					<span className="sr-only">MyMovieList</span>
					<span className="cursor-pointer tracking-tight dark:text-white">
						mymovie<span className="text-primary">list</span>
					</span>
				</h1>
			</Link>

			<NavigationMenu className="ml-4 hidden lg:flex">
				<NavigationMenuList>
					{navigation.items.map((item) =>
						item.items ? (
							<SiteNavItem key={item.title} {...item} />
						) : (
							<SiteNavItemSingle key={item.title} {...item} />
						)
					)}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

const SiteNavItem = ({ title, icon, items, href }: NavItem) => {
	const isActive = useActiveNav(href)
	const Icon = icon

	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger className={cn(isActive && "bg-accent", "gap-2")}>
				<Icon className="size-4" /> {title}
			</NavigationMenuTrigger>
			<NavigationMenuContent>

				<div className="grid w-[650px] grid-cols-2 p-4">
					{items?.map((item) => (
						<SiteNavListItem key={item.title} {...item} />
					))}
				</div>
			</NavigationMenuContent>
		</NavigationMenuItem>
	)
}

const SiteNavItemSingle = ({ title, icon, href }: NavItem) => {
	const isActive = useActiveNav(href)
	const Icon = icon

	return (
		<NavigationMenuItem>
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink
					className={cn(
						navigationMenuTriggerStyle(),
						isActive && "bg-accent",
						"gap-2"
					)}
				>
					<Icon className="size-4" /> {title}
				</NavigationMenuLink>
			</Link>
		</NavigationMenuItem>
	)
}

const SiteNavListItem = ({ title, icon, description, href }: NavItem) => {
	const Icon = icon

	return (
		<NavigationMenuLink asChild>
			<Link
				href={href}
				className="hover:bg-accent select-none space-y-2 rounded-md p-3"
			>
				<div className="text-sm font-medium leading-none">
					<Icon className="mr-1 inline size-3" /> {title}
					{title === "Discover" && (
						<Badge className="ml-2 px-1 py-0 text-[9px] leading-normal tracking-wide">
							NEW
						</Badge>
					)}
				</div>
				<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
					{description}
				</p>
			</Link>
		</NavigationMenuLink>
	)
}

export { SiteNav }
