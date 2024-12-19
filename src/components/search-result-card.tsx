import Link from "next/link"
import {
	MovieWithMediaType,
	PersonWithMediaType,
} from "@/tmdb/models"
import { format } from "@/tmdb/utils"
import { MediaCard } from "@/components/media/media-card"
import { MediaPoster } from "@/components/media/media-poster"
import { MediaRating } from "@/components/media/media-rating"

interface SearchResultCardProps {
	media: MovieWithMediaType | PersonWithMediaType
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
	media,
}) => {
	const { media_type, id } = media

	const isPerson = media_type === "person"
	const isMovie = media_type === "movie"

	return (
		<Link href={`/${media_type}/${id}`} prefetch={false}>
			<MediaCard.Root>
				<MediaPoster
					image={isPerson ? media.profile_path : media.poster_path}
					alt={isMovie ? media.title : media.name}
				/>
				<MediaCard.Content>
					{!isPerson && (
						<MediaRating
							average={media.vote_average}
							count={media.vote_count}
							className="mr-2"
						/>
					)}
					<MediaCard.Title className="mt-2">
						{isMovie ? media.title : media.name}
					</MediaCard.Title>

					<MediaCard.Excerpt>
						{isPerson
							? `Known for ${media.known_for_department}`
							: format.year(
								media.release_date
							)}
					</MediaCard.Excerpt>
				</MediaCard.Content>
			</MediaCard.Root>
		</Link>
	)
}
