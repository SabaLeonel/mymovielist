"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Suspense } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from "~/server/auth"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function SignIn() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button type="submit">Signin with Google</button>
        </form>
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