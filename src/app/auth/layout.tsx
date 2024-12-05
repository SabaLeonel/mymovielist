import type { PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-[#150002] text-white">
			<div className="flex w-full max-w-80 flex-col items-center justify-center gap-3">
				<div className="relative min-h-[243px] w-full">
					{children}
				</div>
			</div>
		</div>
	);
}
