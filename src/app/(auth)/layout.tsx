import type { PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-[#150002] text-white">
			{children}
		</div>
	);
}
