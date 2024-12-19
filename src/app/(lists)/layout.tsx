import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import type { PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div>
			<Header />
			<div className="relative flex-1 py-4">
				{children}
			</div>
			<Footer />
		</div>
	);
}
