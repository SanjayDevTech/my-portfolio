'use client';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/navbar/navbar';
import About from '../components/sections/about/about';
import Home from '../components/sections/home/home';
import Services from '../components/sections/services';
import Skills from '../components/sections/skills';
import Works from '../components/sections/works';
import GlobalIntersectionObserverContext from '../context/GlobalIntersectionObserverContext';
import SectionContext from '../context/SectionContext';

export default function App() {
	const [activeSection, setActiveSection] = useState('');
	const [observer, setObserver] = useState<IntersectionObserver | null>(null);

	const sectionContext = useMemo(
		() =>
			[
				activeSection,
				(section: string) => {
					const element = document.getElementById(section);
					if (element) {
						element.scrollIntoView({
							behavior: 'smooth',
						});
					}
				},
			] as const,
		[activeSection, setActiveSection],
	);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: [0.75, 1.0],
		};
		function callback(entries: IntersectionObserverEntry[]) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}
		const observer = new IntersectionObserver(callback, options);
		setObserver(observer);
	}, []);

	return (
		<GlobalIntersectionObserverContext.Provider value={observer}>
			<SectionContext.Provider value={sectionContext}>
				<Navbar />
				<main>
					<Home />
					<About />
					<Works />
					<Skills />
					<Services />
				</main>
			</SectionContext.Provider>
		</GlobalIntersectionObserverContext.Provider>
	);
}
