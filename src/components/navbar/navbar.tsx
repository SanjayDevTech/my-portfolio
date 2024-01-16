import clsx from "clsx";
import "./navbar.css";
import useSection from "../../hooks/useSection";
import navItems from "./data";
import { sectionToLabel } from "../../utils";

export default function Navbar() {
    const [section, setSection] = useSection();
    return (
        <header className="--navbar-header">
            <p onClick={() => {
                setSection("home");
            }} className="--navbar-brand" title="Sanjay S">Sanjay</p>
            <nav className="--navbar-nav">
                <ul className="--navbar-list">
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            onClick={() => {
                                const element = document.getElementById(item.id);
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                }
                            }}
                            className={clsx("--navbar-item", {
                                "--navbar-item-active": section === item.id
                            })}
                            title={item.title}>{sectionToLabel(item.id)}</li>
                    ))}
                </ul>
            </nav>
            <p className="--navbar-footer">
                &copy; 2024 Sanjay S
            </p>
        </header>
    );
}
