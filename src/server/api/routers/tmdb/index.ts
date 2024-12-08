import { createTRPCRouter } from "@/server/api/trpc";
import { moviesRouter } from "./movies";
import { genresRouter } from "./genres";

export const tmdbRouter = createTRPCRouter({
  movies: moviesRouter,
  genres: genresRouter,
});