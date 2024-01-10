import clsx from "clsx";
import "./navbar.css";
import useSection from "../../hooks/useSection";
import navItems from "./data";

export default function Navbar() {
    const [section] = useSection();
    return (
        <header className="--navbar-header">
            <p className="--navbar-brand" title="Sanjay S">Sanjay S</p>
            <nav className="--navbar-list">
                {navItems.map(item => (
                    <ul
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
                        title={item.title}>{item.label}</ul>
                ))}
            </nav>
            <p className="--navbar-footer">
                Created by me on<br /><a className="--navbar-footer-link" target="_blank" href="https://github.com/SanjayDevTech/Portfolio">GitHub</a>
            </p>
        </header>
    );
}
