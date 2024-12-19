import { User } from "lucide-react"

import { cn } from "@/lib/utils"

import { Badge, BadgeProps } from "@/components/ui/badge"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

interface MediaRatingProps extends BadgeProps {
	average: number
	count?: number
}

export const MediaRating: React.FC<MediaRatingProps> = ({
	average,
	count,
	className,
	...props
}) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					{average ? (
						<Badge
							className={cn("flex items-center gap-1", className)}
							{...props}
						>
							{average.toFixed(1)}
						</Badge>
					) : null}
				</TooltipTrigger>

				{!!count && (
					<TooltipContent className="bg-foreground text-background flex items-center gap-1 text-xs">
						<User className="size-3" /> {count}
					</TooltipContent>
				)}
			</Tooltip>
		</TooltipProvider>
	)
}
