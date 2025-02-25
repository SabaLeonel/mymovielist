"use client"

import Link from "next/link"
import React from "react"
import { FaPlay } from "react-icons/fa"

import { MediaBackdrop } from "@/components/media/media-backdrop"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface HomeHeroProps {
	movie?: any
	label?: string
}

export const HomeHero: React.FC<HomeHeroProps> = ({ movie, label }) => {
	if (!movie) {
		return <div className="p-4">No movie found.</div>
	}

	return (
		<div className="h-hero animate-fadeDown relative" key={movie.id}>
			{/* The large background image */}
			<MediaBackdrop
				image={movie.backdrop_path}
				alt={movie.title}
			/>

			<div className="overlay">
				<div className="max-w-3xl space-y-4 p-4 pb-8 text-left md:p-14">
					{label && (
						<Badge variant="outline" className="select-none">
							{label}
						</Badge>
					)}
					<h1 className="line-clamp-2 text-xl font-medium leading-tight tracking-tighter md:text-4xl">
						{movie.title}
					</h1>
					<p className="line-clamp-3 text-sm text-white md:text-lg">
						{movie.overview}
					</p>
					<div className="flex flex-col gap-4 md:flex-row">
						<Button
							size="lg"
							variant="default"
							className="hover:bg-primary/75 rounded-full bg-white text-black hover:text-white"
							asChild
						>
							<Link href={`/movie/${movie.id}`} scroll={false}>
								<FaPlay className="size-4" />
								Details
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
