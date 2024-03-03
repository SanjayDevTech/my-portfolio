import clsx from "classnames";
import useSection from "../../hooks/useSection";
import navItems from "./data";
import { sectionToIcon, sectionToLabel } from "../../utils";

export default function Navbar() {
    const [section, setSection] = useSection();
    return (
        <nav className="--navbar-nav bottom">
            <ul className="--navbar-list">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            setSection(item.id)
                        }}
                        className={clsx('--navbar-item', {
                            '--navbar-item-active': section === item.id,
                        })}
                        title={item.title}
                    >
                        {sectionToIcon(item.id)}
                        {sectionToLabel(item.id)}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
