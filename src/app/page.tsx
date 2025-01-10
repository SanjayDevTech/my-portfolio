import CopyButton from "../components/copy-button";
import Profile from "../components/profile";
const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/SanjayDevTech",
		icon: "github",
	},
	{
		name: "X (Twitter)",
		url: "https://x.com/SanjayDevTech",
		icon: "x",
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/sanjaydevtech",
		icon: "linkedin",
	},
];

export default function App() {
	return (
		<>
			<section className="w-full h-[650px] md:h-[750px] pt-10 flex flex-col border-gray-150 rounded-b-[100px] border-[1px] bg-gray-100">
				<header className="flex flex-row justify-between h-16 w-full items-center md:px-20 px-3">
					<div className="flex flex-row gap-1 md:gap-2 h-full items-center">
						<a
							className="md:hidden flex bg-gray-100 border-solid border-[1px] p-[3px] rounded-full h-min w-full text-xs font-medium -tracking-tighter text-gray-400 hover:underline  border-gray-150"
							href="mailto:hello@sanjaydev.tech"
						>
							<div className="flex items-center justify-center h-10 md:w-[100px] w-[80px] bg-gray-400 text-white rounded-full">
								Email
							</div>
						</a>
						<div className="md:flex hidden bg-gray-100 items-center border-solid border-[1px]  p-[3px] rounded-full h-min w-full text-xs font-normal -tracking-tighter text-gray-400 border-gray-150">
							<p className="px-4">hello@sanjaydev.tech</p>
							<CopyButton text="hello@sanjaydev.tech" />
						</div>
						<a
							className="bg-gray-100 border-solid border-[1px] p-[3px] rounded-full h-min flex w-full text-xs font-medium -tracking-tighter text-gray-400 hover:underline  border-gray-150"
							href="#"
						>
							<div className="flex items-center justify-center h-10 md:w-[100px] w-[80px] bg-white rounded-full">
								CV
							</div>
						</a>
					</div>
					<nav>
						<ul className="md:flex hidden flex-row gap-2">
							{socialLinks
								.flatMap((n, i, array) => (i + 1 < array.length ? [n, "/"] : [n]))
								.map((link, i) => (
									<li key={typeof link === "string" ? `${link}_${i}` : link.name}>
										{typeof link === "string" ? (
											<span className="text-sm font-normal text-gray-200">/</span>
										) : (
											<a
												className="text-sm font-normal -tracking-normal text-gray-200 hover:underline"
												target="_blank"
												rel="noopener"
												href={link.url}
											>
												{link.name}
											</a>
										)}
									</li>
								))}
						</ul>
						<ul className="flex flex-row gap-1 md:hidden">
							{socialLinks.map((link) => (
								<li
									key={link.name}
									className="bg-gray-100 items-center flex border-solid border-[1px] border-gray-150 p-[3px] rounded-full"
								>
									<a
										className="w-10 h-10 rounded-full inline-block bg-white p-3"
										target="_blank"
										rel="noopener"
										href={link.url}
									>
										<div
											className="h-full w-full bg-gray-400"
											style={{
												maskImage: `url(/assets/icons/${link.icon}.svg)`,
												maskSize: "100%",
												maskRepeat: "no-repeat",
												maskPosition: "center",
											}}
										/>
									</a>
								</li>
							))}
						</ul>
					</nav>
				</header>
				<div className="flex flex-col justify-center items-center h-full gap-3">
					<Profile />
					<div className="gap-10 flex flex-col justify-center items-center">
						<p className="font-medium text-4xl md:text-6xl text-center leading-[3rem] md:leading-[4.5rem] bg-text-gradient bg-clip-text inline-block text-transparent">
							Bringing ideas
							<br />
							with apps, brands and
							<br />
							experiences.
						</p>
						<a
							href="#projects"
							className="bg-gray-400 text-white font-medium text-xs rounded-full px-12 py-6 flex flex-row gap-1 items-center w-48 hover:underline"
						>
							Latest projects
							<div
								className="bg-white w-3 h-3 rounded-full inline-block"
								style={{
									maskImage: `url(/assets/icons/down-arrow.svg)`,
									maskSize: "100%",
									maskRepeat: "no-repeat",
									maskPosition: "center",
								}}
							/>
						</a>
					</div>
				</div>
			</section>
			<section>hi</section>
		</>
	);
}
