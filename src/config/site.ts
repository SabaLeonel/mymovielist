import {
	CalendarIcon,
	ClapperboardIcon,
	HeartIcon,
	HomeIcon,
	LucideIcon,
	PlayIcon,
	StarIcon,
	TelescopeIcon,
	TrendingUpIcon,
	User
} from "lucide-react"
  
  import { pages } from "@/config/pages"
  
  export type SiteConfig = typeof siteConfig
  
  export const siteConfig = {
	name: "Movies App",
	description:
	  "Millions of movies, TV shows and people to discover. Explore now.",
	mainNav: [
	  {
		title: "Home",
		href: "/",
	  },
	],
	links: {
	  github: "https://github.com/sabaleonel/mymovielist",
	  next: "https://nextjs.org",
	  vercel: "https://vercel.com",
	  tmdb: "https://www.themoviedb.org",
	  shadcn: "https://ui.shadcn.com/",
	},
	author: {
	  name: "Leonel Saba Quezada",
	  web: "https://quezada.ch",
	},
  }
  
  export type NavItem = {
	title: string
	href: string
	icon: LucideIcon
	description?: string
	items?: NavItem[]
  }
  
  const home = {
	title: "Home",
	href: "/",
	icon: HomeIcon,
  }
  
  const movies = {
	title: "Movies",
	href: "/movie",
	icon: ClapperboardIcon,
	description: pages.movie.root.description,
	items: [
	  {
		title: "Discover",
		href: "/movie/discover",
		icon: TelescopeIcon,
		description: pages.movie.discover.description,
	  },
	  {
		title: "Popular",
		href: "/movie/popular",
		icon: HeartIcon,
		description: pages.movie.popular.description,
	  },
	  {
		title: "Now Playing",
		href: "/movie/now-playing",
		icon: PlayIcon,
		description: pages.movie.nowPlaying.description,
	  },
	  {
		title: "Upcoming",
		href: "/movie/upcoming",
		icon: CalendarIcon,
		description: pages.movie.upcoming.description,
	  },
	  {
		title: "Top Rated",
		href: "/movie/top-rated",
		icon: StarIcon,
		description: pages.movie.topRated.description,
	  },
	],
  }
  

  const people = {
	title: "Actors",
	href: "/people",
	icon: User,
	description: pages.people.root.description,
	items: [
	  {
		title: "Popular",
		href: "/person/popular",
		icon: HeartIcon,
		description: pages.people.popular.description,
	  },
	],
  }
  
  const trending = {
	title: "Trending",
	icon: TrendingUpIcon,
	href: "/trending",
	description: pages.trending.root.description,
	items: [
	  {
		title: "Movies",
		href: "/trending/movie",
		icon: ClapperboardIcon,
		description: pages.trending.movie.description,
	  },
	  // {
	  //   title: "Actors",
	  //   href: "/trending/people",
	  //   icon: User,
	  //   description: pages.trending.people.description,
	  // },
	],
  }
  
  export const navigation = {
	items: [home, movies, people, trending] as NavItem[],
  }
  
  export const availableParams = [
	"with_genres",
	"primary_release_date.gte",
	"primary_release_date.lte",
  ]
  