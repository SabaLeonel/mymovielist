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
				<div className="mt-2 text-center text-base text-slate-400">We've sent you a magic login link.<br />
					Please click the link to confirm your email.
				</div>
				<div data-orientation="horizontal" role="none" className="shrink-0 h-[0.5px] w-full bg-slate-800 my-8"></div>
				<div className="flex gap-2 text-slate-400">

					<a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 px-[14px] py-2" href="https://mail.google.com">
						<SiGmail className="mr-2" />
						Open Gmail
					</a>
					<a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 px-[14px] py-2" href="https://mail.google.com">
						<PiMicrosoftOutlookLogo className="mr-2" />
						Open Outlook
					</a>
				</div>
				<div className="mt-8 text-center text-xs text-slate-400">Can't see the email? Please check your spam folder.<br />
					Wrong email?
					<a href="/auth/sign-in"><span className="text-blue-400 transition-colors hover:text-blue-300"> Please re-enter your address.</span></a>
				</div>
			</div>
	);
}
