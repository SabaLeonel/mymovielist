"use client";

import Link from "next/link";
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"


export const HomeHero = () => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return <Skeleton className="h-hero relative w-full" />

	return (
		<div className="flex flex-col items-center justify-center space-y-4 pt-10">
			<h1 className="text-4xl font-bold text-center sm:text-6xl">mymovie<span className="text-primary">list</span></h1>
			<p className="text-center">Made with Next.js, React and Tailwindcss</p>
			
		</div>
	);
}