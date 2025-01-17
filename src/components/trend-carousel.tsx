"use client"

import {
	MovieWithMediaType,
	PersonWithMediaType
} from "@/tmdb/models"
import Link from "next/link"
import React, { useEffect, useState } from "react"

import { MovieCard } from "@/components/movie/movie-card"
import { PersonCard } from "@/components/person/person-card"
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronRight, Tally1 } from "lucide-react"


interface TrendCarouselProps {
	title?: string
	link?: string
	items: MovieWithMediaType[] | PersonWithMediaType[]
	type: "movie" | "person"
}

export const TrendCarousel: React.FC<TrendCarouselProps> = ({
	title,
	link,
	items,
}) => {
	const [api, setApi] = useState<CarouselApi>()
	const [total, setTotal] = useState(0)
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		if (!api) return

		setTotal(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	function nextSlide() {
		api?.scrollNext()
	}

	function previousSlide() {
		api?.scrollPrev()
	}

	return (
		<Carousel opts={{ dragFree: true }} setApi={setApi}>
			<div className="mb-4 mt-10 flex items-center justify-between gap-4 md:justify-start">
				{link && (

					<Link
						href={link}
						scroll={true}
						prefetch={false}
						className="group flex items-center"
					>
						<Tally1 strokeWidth={3} className="text-primary -mr-4 size-8" />
						<h2 className="font-semibold  md:text-2xl">{title}</h2>
						<ChevronRight strokeWidth={3} className="group-hover:text-primary size-7 transition-all ease-in-out group-hover:ml-4 group-hover:duration-700" />
					</Link>
				)}
			</div>

			<CarouselContent>
				{items.map((item) => (
					<CarouselItem
						key={item.id}
						className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					>
						{item.media_type === "person" ? (
							<PersonCard key={item.id} {...item} />
						) : (
							<MovieCard key={item.id} {...item} />
						)}
					</CarouselItem>
				))}
			</CarouselContent >
			<CarouselPrevious 
				variant="ghost" 
				className="hover:text-primary hover:bg-transparent"
			/>
			<CarouselNext 
				variant="ghost"
				className="hover:text-primary hover:bg-transparent" 
			/>
		</Carousel>
	)
}
