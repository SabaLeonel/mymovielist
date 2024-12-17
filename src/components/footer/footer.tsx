import { navigation, siteConfig } from "@/config";
import Link from 'next/link';
import { Icons } from "../icons";

const LINKS = [
    {
        title: "Product",
        items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
        title: "Company",
        items: ["About us", "Careers", "Press", "News"],
    },
    {
        title: "Resource",
        items: ["Blog", "Newsletter", "Events", "Help center"],
    },
];

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="relative w-full mt-12 pt-12 border-t bg-background">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Link href="/" className="mb-6">
                        <h1 className="text-xl font-bold">
                            <span className="sr-only">MyMovieList</span>
                            <span className="tracking-tight dark:text-white cursor-pointer">
                                mymovie<span className="text-primary">list</span>
                            </span>
                        </h1>
                    </Link>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {navigation.items.slice(1, navigation.items.length).map((item) => (
                            <ul className="flex-1" key={item.title}>
                                <h3 className="font-semibold  text-muted-foreground">{item.title}</h3>
                                {item.items?.map((subitem) => (
                                    <li className="mb-2 text-sm" key={subitem.href}>
                                        <Link
                                            href={subitem.href}
                                            prefetch={false}
                                            className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                                        >
                                            {subitem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <p className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
                        &copy; {currentYear} <Link href="https://quezada.ch">Leonel Saba Quezada</Link>. All
                        Rights Reserved.
                    </p>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Link href="#" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link href={siteConfig.links.tmdb} className="opacity-80 transition-opacity hover:opacity-100">
                            <Icons.Tmdb className="fill-current size-4" />
                        </Link>
                        <Link href={siteConfig.links.github} className="opacity-80 transition-opacity hover:opacity-100">
                            <Icons.Github className="fill-current size-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}