"use client";

import { MediaBackdrop } from "@/components/media/media-backdrop";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getFilmItemsByTitle } from "@/lib/utils";
import { Movie } from "@/tmdb/models";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";



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
	const item = getFilmItemsByTitle(movies, "Gladiator II");
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return <Skeleton className="h-hero relative w-full bg-transparent" />

	return (

		<div className="h-hero relative" key={item?.id}>
			<MediaBackdrop image={item?.backdrop_path} alt={item?.title ?? ''} />

			<div className="overlay">
				<div className=" max-w-3xl space-y-4 p-4 pb-8 text-left md:p-14">
					<Badge variant="outline" className="select-none">{label}</Badge>
					<h1 className="line-clamp-2 text-xl font-medium leading-tight tracking-tighter md:text-4xl">
						{item?.title}
					</h1>
					<p className="line-clamp-3 text-sm text-white md:text-lg">
						{item?.overview}
					</p>
					<div className="items-left flex flex-col  gap-4 md:flex-row">
						<Link
							href={`/movie/${item?.id}`}
							className={`${buttonVariants({
								size: "lg",
								variant: "default",
							})} dark:hover:bg-primary/75 dark:rounded-full dark:bg-white dark:text-black dark:hover:text-white`}
						>
							<FaPlay className="size-2" />Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}