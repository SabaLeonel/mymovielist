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
        <footer className="bg-background relative mt-12 w-full border-t pt-12">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Link href="/" className="mb-6">
                        <h1 className="text-xl font-bold">
                            <span className="sr-only">MyMovieList</span>
                            <span className="cursor-pointer tracking-tight dark:text-white">
                                mymovie<span className="text-primary">list</span>
                            </span>
                        </h1>
                    </Link>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {navigation.items.slice(1, navigation.items.length).map((item) => (
                            <ul className="flex-1" key={item.title}>
                                <h3 className="text-muted-foreground font-bold  lg:text-lg">{item.title}</h3>
                                {item.items?.map((subitem) => (
                                    <li className="hover:text-primary mb-2 text-sm transition-colors" key={subitem.href}>
                                        <Link
                                            href={subitem.href}
                                            prefetch={false}
                                            className="py-1.5 font-normal"
                                        >
                                            {subitem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="border-blue-gray-50 mt-12 flex w-full flex-col items-center justify-center border-t py-4 md:flex-row md:justify-between">
                    <p className="text-muted-foreground mb-4 text-center font-normal md:mb-0">
                        &copy; {currentYear} <Link href="https://quezada.ch" target="_blank" className="hover:text-primary text-white">Leonel Saba Quezada</Link>. All
                        Rights Reserved.
                    </p>
                    <div className="text-blue-gray-900 flex gap-4 sm:justify-center">
        
                        <Link href={siteConfig.links.tmdb} target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <Icons.Tmdb className="size-6 fill-current" />
                        </Link>
                        <Link href={siteConfig.links.github} target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <Icons.Github className="size-6 fill-current" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}