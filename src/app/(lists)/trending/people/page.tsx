import { pages } from "@/config"

import { TrendList } from "@/components/trend-list"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


export async function generateMetadata() {
	return {
		title: "Trending Actos",
		description: pages.trending.tv.description,
	}
}

export default async function TrendingPage({ searchParams }:
	{ searchParams: Promise<SearchParams> }) {
	const resolvedSearchParams = await searchParams;

	return (
		<TrendList
			type="people"
			time="day"
			title="Trending Actors"
			description={pages.trending.people.description}
			page={resolvedSearchParams?.page as string}
		/>
	)
}
