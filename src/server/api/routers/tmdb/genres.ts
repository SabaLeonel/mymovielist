/*import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getMovieGenres } from "@/tmdb/api/genres";

export const genresRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const genres = await getMovieGenres();
    return genres;
  }),
});
*/