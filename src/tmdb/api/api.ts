import apiConfig from "@/tmdb/api/config"

type FetcherOptions = {
  endpoint: string
  params?: Record<string, string | undefined>
}

type Fetcher = <T>(options: FetcherOptions, init?: RequestInit) => Promise<T>


const sanitizeParams = (params?: Record<string, string | undefined>) => {
  return Object.fromEntries(
    Object.entries(params ?? {}).filter(([, value]) => value !== undefined)
  )
}

const createSearchParams = (params: Record<string, string | undefined>) => {
  const sanitizedParams = sanitizeParams(params)
  const mergedParams: Record<string, string> = {
    ...apiConfig.defaultParams,
    ...sanitizedParams,
  } as Record<string, string>

  return new URLSearchParams(mergedParams).toString()
}


const createHeaders = (init?: RequestInit): Headers => {
  const headers = init?.headers ?? {}
  const mergedHeaders = { ...apiConfig.defaultHeaders, ...headers }
  return new Headers(mergedHeaders)
}

const fetcher: Fetcher = async ({ endpoint, params }, init) => {
  const sanitizedParams = sanitizeParams(params)
  const _params = createSearchParams(sanitizedParams)
  const _headers = createHeaders(init)

  const _init = {
    ...init,
    next: { revalidate: 600, ...init?.next },
    headers: _headers,
  }

  const url = `${apiConfig.baseUrl}/${endpoint}?${_params}`
  const response = await fetch(url, _init)

   if (!response.ok) {
     throw new Error(
       `API request failed with status ${response.status}: ${response.statusText}`
     )
   }

  return await response.json()
}

export const api = {
  fetcher,
}
