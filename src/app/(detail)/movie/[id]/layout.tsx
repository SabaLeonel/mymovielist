import Link from "next/link"
import { notFound } from "next/navigation"
import { tmdb } from "@/tmdb/api"
import { WithVideos } from "@/tmdb/api/types"
import { format } from "@/tmdb/utils"

import { MediaBackdrop } from "@/components/media/media-backdrop"
import { MediaDetailView } from "@/components/media/media-detail-view"
import { MediaPoster } from "@/components/media/media-poster"
import { MediaRating } from "@/components/media/media-rating"

interface DetailLayoutProps {
	params: Promise<{
		id: string;
	}>;
	children: React.ReactNode
}

export async function generateMetadata({ params }: DetailLayoutProps) {
	const { id } = await params;
	const { title } = await tmdb.movie.detail({
		id: id,
	})

	return {
		title,
	}
}

const DetailLayout = async ({ params, children }: DetailLayoutProps) => {
const { id } = await params;
const {
	title,
	overview,
	genres,
	vote_average,
	vote_count,
	backdrop_path,
	poster_path,
	tagline,
} = await tmdb.movie.detail<WithVideos>({
	id: id,
	append: "videos",
})

if (!id) return notFound()

return (
	<MediaDetailView.Root>
		<MediaDetailView.Backdrop>
			<MediaBackdrop image={backdrop_path} alt={title} priority />
		</MediaDetailView.Backdrop>

		<MediaDetailView.Hero>
			<MediaDetailView.Poster>
				<MediaPoster image={poster_path} alt={title} size="w780" priority />
			</MediaDetailView.Poster>

			<div className="space-y-4">
				<MediaDetailView.Genres>
					<MediaRating average={vote_average} count={vote_count} />

					{genres?.map((genre) => (

						<MediaDetailView.Genre key={genre.id}>
							{genre.name}
						</MediaDetailView.Genre>
					))}
				</MediaDetailView.Genres>

				<MediaDetailView.Title>{title}</MediaDetailView.Title>

				{tagline && (
					<MediaDetailView.Overview>
						&quot;{tagline}&quot;
					</MediaDetailView.Overview>
				)}

				<MediaDetailView.Overview
					dangerouslySetInnerHTML={{ __html: format.content(overview) }}
				/>
			</div>
		</MediaDetailView.Hero>
		<MediaDetailView.Content>
			<div className="mt-4">{children}</div>
		</MediaDetailView.Content>
	</MediaDetailView.Root>
)
}


export default DetailLayout;