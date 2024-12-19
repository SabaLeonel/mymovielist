import { redirect } from "next/navigation"
import { tmdb } from "@/tmdb/api"

import { ListPagination } from "@/components/list/list-pagination"
import { SearchResultCard } from "@/components/search-result-card"


type SearchParams = Promise<{ q?: string; page?: string }>

interface SearchProps {
	searchParams: SearchParams
}

export async function generateMetadata({ searchParams }: SearchProps) {
	const { q } = await searchParams;

	return {
		title: q ? `Search results for: ${q}` : "Search Results",
	}
}

export default async function Search({ searchParams }: SearchProps) {

	const { q, page } = await searchParams;

	if (!q) {
		return redirect("/")
	}

	const { results, page: currentPage, total_pages } = await tmdb.search.multi({
		query: q,
		page: page,
	})

	if (!results.length)
		return (
			<div className="container flex h-[33vh] items-end justify-center">
				<div className="text-center">
					<h1 className="text-2xl">No results found</h1>
					<p className="text-muted-foreground">
						No results found for &quot;{q}&quot;.
						<br />
						Please try a different search term.
					</p>
				</div>
			</div>
		)

	return (
		<div className="container h-full">
			<div className="space-y-8">
				<div className="md:mb-12 md:mt-6">
					<h1 className="mb-2 text-2xl font-medium">Search results for</h1>
					<p className="text-xl text-muted-foreground">
						&quot;{q}&quot;
					</p>
				</div>

				<div className="grid-list">
					{results.map((result) => {
						return <SearchResultCard key={result.id} media={result} />
					})}
				</div>
				<ListPagination currentPage={currentPage} totalPages={total_pages} />
			</div>
		</div>
	)
}
