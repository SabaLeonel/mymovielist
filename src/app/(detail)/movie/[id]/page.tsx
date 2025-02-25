import Link from "next/link"
import { tmdb } from "@/tmdb/api"
import { format } from "@/tmdb/utils"

import { formatValue, joiner } from "@/lib/utils"

interface DetailProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function Detail({ params }: DetailProps) {
	const { id } = await params;

	const {
		status,
		release_date,
		runtime,
		budget,
		revenue,
		spoken_languages,
		production_companies,
		original_title,
	} = await tmdb.movie.detail({
		id: id,
	})

	const overview = [
		{
			title: "Release Date",
			value: formatValue(release_date, format.date),
		},
		{
			title: "Status",
			value: formatValue(status),
		},
		{
			title: "Original Title",
			value: formatValue(original_title),
		},
		{
			title: "Runtime",
			value: formatValue(runtime, format.runtime),
		},
		{
			title: "Budget",
			value: formatValue(budget, format.currency),
		},
		{
			title: "Revenue",
			value: formatValue(revenue, format.currency),
		},
		{
			title: "Language",
			value: joiner(spoken_languages, "english_name"),
		},
		{
			title: "Production Companies",
			value: production_companies.map(({ id, name }) => (
				<Link
					key={id}
					href={`/movie/discover?with_companies=${id}`}
					className="hover:text-foreground mr-1 border-b-2 transition"
				>
					{name}
				</Link>
			)),
		},
	]

	return (
		<section className="space-y-4">
			<div className="grid grid-cols-2 gap-y-12 rounded border p-6 md:grid-cols-4">
				{overview.map((item) => (
					<div key={item.title}>
						<h2 className="font-medium md:text-xl">{item.title}</h2>
						<p className="text-muted-foreground mt-2 line-clamp-2 text-sm md:text-base">
							{item.value}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
