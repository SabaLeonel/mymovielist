import { Suspense } from "react";

function AuthPage() {
    return (
        <div>
            <h1>Log In</h1>
            <form>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}

export default function Page() {
    return (
        <div className='flex justify-center items-center'>
            <Suspense fallback={<div>Loading...</div>}>
                <AuthPage />
            </Suspense>
        </div>
    );
}