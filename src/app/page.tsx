import CopyButton from "../components/copy-button";
import Profile from "../components/profile";
const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/SanjayDevTech"
	},
	{
		name: "X (Twitter)",
		url: "https://x.com/SanjayDevTech"
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/sanjaydevtech"
	}
]

export default function App() {

	return (
		<div>
			<section className="w-full h-[700px] pt-10 flex flex-col border-gray-150 rounded-b-[100px] border-[1px] bg-gray-100">
				<header className="flex flex-row justify-between h-16 w-full items-center px-14">
					<div className="flex flex-row gap-2 h-full items-center">
						<div className="bg-gray-100 items-center border-solid border-[1px]  p-[3px] rounded-full h-min flex w-full text-xs font-normal -tracking-tighter text-gray-400 border-gray-150"  >
							<p className="px-4">hello@sanjaydev.tech</p>
							<CopyButton text="hello@sanjaydev.tech" />
						</div>
						<a className="bg-gray-100 border-solid border-[1px] p-[3px] rounded-full h-min flex w-full text-xs font-medium -tracking-tighter text-gray-400 hover:underline  border-gray-150" href="#" >
							<div className="flex items-center justify-center h-10 w-[100px] bg-white rounded-full">
								CV
							</div>
						</a>
					</div>
					<nav>
						<ul className="flex flex-row gap-2">
							{socialLinks.flatMap((n, i, array) => (i + 1 < array.length ? [n, "/"] : [n])).map((link, i) => (
								<li key={typeof link === "string" ? `${link}_${i}` : link.name}>
									{
										typeof link === "string" ? (
											<span className="text-sm font-normal text-gray-200">/</span>
										) : (
											<a className="text-sm font-normal -tracking-tighter text-gray-200 hover:underline" target="_blank" rel="noopener" href={link.url}>{link.name}</a>
										)
									}
								</li>
							))}
						</ul>
					</nav>
				</header>
				<div className="flex flex-col justify-center items-center h-full gap-3">
					<Profile />
					<p className="font-medium text-6xl text-center leading-[4.5rem] bg-text-gradient bg-clip-text inline-block text-transparent">
						Building digital
						<br />
						products, brands, and
						<br />
						experience.
					</p>
				</div>
			</section>
			<section>
				hi
			</section>
		</div>

	);
}
