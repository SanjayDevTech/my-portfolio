import AboutSvg from "./icons/AboutSvg";
import HomeSvg from "./icons/HomeSvg";
import ServicesSvg from "./icons/ServicesSvg";
import SkillsSvg from "./icons/SkillsSvg";
import WorksSvg from "./icons/WorksSvg";

export function sectionToLabel(section: string) {
	switch (section) {
		case "home":
			return "Home";
		case "about":
			return "About";
		case "works":
			return "Works";
		case "skills":
			return "I Know";
		case "services":
			return "I Can";
	}
}

export function sectionToIcon(section: string) {
	switch (section) {
		case "home":
			return <HomeSvg />;
		case "about":
			return <AboutSvg />;
		case "works":
			return <WorksSvg />;
		case "skills":
			return <SkillsSvg />;
		case "services":
			return <ServicesSvg />;
	}
}
