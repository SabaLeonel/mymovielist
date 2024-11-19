import { Suspense } from "react"

export function LoginPage() {

    return (
    <div className="font-">
		Login Page
	</div>
    );
}

export default function Page() {
    return (
        <div className='flex justify-center items-center'>
            <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
            </Suspense>
        </div>
    );
}