import { Header } from "@/components/header/header";



export default async function Home() {

	return (
		<section>
			<main className=" bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
				<div >
					<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
						My Movie <span className="text-[hsl(280,100%,70%)]">List</span>
					</h1>
				</div>
			</main>
		</section>
	)
}
