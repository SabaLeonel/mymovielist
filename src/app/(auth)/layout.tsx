import type { PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div>
      {children}
    </div>
  );
}
