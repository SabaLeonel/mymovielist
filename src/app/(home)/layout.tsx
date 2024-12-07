import type { PropsWithChildren } from 'react';
import { Header } from "@/components/header/header"

export default function Layout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div>
			<Header />
			<div className="relative flex-1 py-4">
				{children}
			</div>
		</div>
	);
}
