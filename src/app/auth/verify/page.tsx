import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { SiGmail } from "react-icons/si";

export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="mt-4 text-4xl font-semibold tracking-tight">
				<span className="tracking-tight text-white">
					mymovie<span className="text-primary">list</span>
				</span>
			</h1>
			<div className="mt-8 text-lg font-medium">Check your inbox</div>
			<div className="mt-2 text-center text-base text-slate-400">{`We've sent you a magic login link.`}<br />
				Please click the link to confirm your email.
			</div>
			<div data-orientation="horizontal" role="none" className="my-8 h-[0.5px] w-full shrink-0 bg-slate-800"></div>
			<div className="flex gap-2 text-slate-400">

				<a className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md px-[14px] py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50" href="https://mail.google.com">
					<SiGmail className="mr-2 size-4" />
					Open Gmail
				</a>
				<a className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md px-[14px] py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50" href="https://outlook.live.com/mail	">
					<PiMicrosoftOutlookLogo className="mr-2 size-4" />
					Open Outlook
				</a>
			</div>
			<div className="mt-8 text-center text-xs text-slate-400">{`Can't see the email? Please check your spam folder.<br />
				Wrong email?`}
				<a href="/auth/sign-in"><span className="text-blue-400 transition-colors hover:text-blue-300"> Please re-enter your address.</span></a>
			</div>
		</div>
	);
}
