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
			return <HomeSvg width={24} height={24} />;
		case "about":
			return <AboutSvg width={24} height={24} />;
		case "works":
			return <WorksSvg width={24} height={24} />;
		case "skills":
			return <SkillsSvg width={24} height={24} />;
		case "services":
			return <ServicesSvg width={24} height={24} />;
	}
}
