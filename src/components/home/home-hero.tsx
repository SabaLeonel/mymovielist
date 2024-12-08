"use client";

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getRandomItems } from "@/lib/utils"
import { MediaBackdrop } from "@/components/media/media-backdrop"
import { Movie } from "@/tmdb/models"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"



interface HomeHeroProps {
	movies: Movie[]
	label?: string
	count?: number
}


export const HomeHero: React.FC<HomeHeroProps> = ({
	movies,
	label,
	count = 1,
}) => {
	const [mounted, setMounted] = useState(false);
	const items = getRandomItems(movies, count);
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return <Skeleton className="h-hero relative w-full bg-transparent" />

	return items.map((item) => (

			<div className="h-hero relative" key={item.id}>
				<MediaBackdrop image={item.backdrop_path} alt={item.title} />

				<div className="overlay">
					<div className=" max-w-3xl space-y-4 p-4 pb-8 text-left md:p-14">
						<Badge variant="outline" className="select-none">{label}</Badge>

						<h1 className="line-clamp-2 text-xl font-medium leading-tight tracking-tighter md:text-4xl">
							{item.title}
						</h1>
						<p className="line-clamp-3 text-sm text-muted-foreground md:text-lg">
							{item.overview}
						</p>

						<div className="flex flex-col items-left  gap-4 md:flex-row">
							<Link
								href={`/movie/${item.id}`}
								className={`${buttonVariants({
									size: "lg",
									variant: "default",
								  })} rounded-3xl bg-white dark:text-black`}
							>
								Details <ArrowRight className="size-4" />
							</Link>
						</div>
					</div>
				</div>
			</div>
	))
}