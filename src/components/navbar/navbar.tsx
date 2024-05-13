import clsx from "classnames";
import useSection from "../../hooks/useSection";
import { sectionToIcon, sectionToLabel } from "../../utils";
import navItems from "./data";

export default function Navbar() {
	const [section, setSection] = useSection();
	return (
		<nav className="--navbar-nav bottom">
			<ul className="--navbar-list">
				{navItems.map((item) => (
					<li
						key={item.id}
						onClick={() => {
							setSection(item.id);
						}}
						className={clsx("--navbar-item", {
							active: section === item.id,
						})}
						title={item.title}
					>
						{sectionToIcon(item.id)}
						<label>{sectionToLabel(item.id)}</label>
					</li>
				))}
			</ul>
		</nav>
	);
}
