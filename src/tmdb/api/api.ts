const TMDB_API_KEY = process.env.TMDB_KEY;

if (!TMDB_API_KEY) {
	throw new Error("TMDB_KEY is not defined in environment variables.");
}

const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Fetches data from the TMDB API with default parameters and headers.
 * Automatically includes default parameters like the language.
 */
export async function fetchTMDB<T>(
	endpoint: string,
	params: Record<string, string | undefined> = {}
): Promise<T> {
	// Merge default and provided parameters
	const defaultParams = { language: "en-US" };
	const sanitizedParams = Object.fromEntries(
		Object.entries({ ...defaultParams, ...params }).filter(([, value]) => value !== undefined)
	);

	const url = new URL(`${BASE_URL}/${endpoint}`);
	Object.entries(sanitizedParams).forEach(([key, value]) => {
		url.searchParams.append(key, value);
	});

	const response = await fetch(url.toString(), {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${TMDB_API_KEY}`,
		},
	});

	if (!response.ok) {
		throw new Error(`TMDB API error: ${response.status} - ${response.statusText}`);
	}

	// Return parsed JSON
	return await response.json();
}
