import { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero"

export const metadata: Metadata = {
	title: "Home",
}

export default async function Home() {

	return (
		<section>
			<div className="container space-y-8">
				<HomeHero />
			</div>
		</section>
	)
}
