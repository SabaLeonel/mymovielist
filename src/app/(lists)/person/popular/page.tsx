import { pages } from "@/config"

import { PersonList } from "@/components/person/person-list"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

interface ListPageProps {
    searchParams?: Record<string, string>
}

export async function generateMetadata() {
    return {
        title: "Popular People",
        description: pages.people.popular.description,
    }
}

export default async function Popular({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const resolvedSearchParams = await searchParams;

    return (
        <PersonList
            list="popular"
			page={resolvedSearchParams?.page as string ?? "1"}
            title={pages.people.popular.title}
            description={pages.people.popular.description}
        />
    )
}
