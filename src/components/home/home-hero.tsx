"use client";

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getRandomItems } from "@/lib/utils"
import { MediaBackdrop } from "@/components/media/media-backdrop"
import { Movie } from "@/tmdb/models"


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
		<div className="flex flex-col items-center justify-center space-y-4 pt-10" key={item.id}>
			<h1 className="text-4xl font-bold text-center sm:text-6xl">mymovie<span className="text-primary">list</span></h1>
			<p className="text-center">Made with Next.js, React and Tailwindcss</p>

			<div className="pt-4 h-hero relative">
				<MediaBackdrop image={item.backdrop_path} alt={item.title} />
			</div>
		</div>
	))
}