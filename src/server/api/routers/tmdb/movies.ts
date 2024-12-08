import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getPopularMovies } from "@/tmdb/api/movies";

export const moviesRouter = createTRPCRouter({
  getPopular: publicProcedure.query(async () => {
    const movies = await getPopularMovies();
    return movies;
  }),

  getMovieDetails: publicProcedure
    .input(z.object({ id: z.number().min(1) }))
    .query(async ({ input }) => {
      const movieDetails = await fetchMovieDetails(input.id);
      return movieDetails;
    }),
});