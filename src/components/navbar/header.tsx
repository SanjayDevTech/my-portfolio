import clsx from 'classnames';
import useSection from '../../hooks/useSection';
import { sectionToLabel } from '../../utils';
import navItems from './data';

export default function Header() {
	const [section, setSection] = useSection();
	return (
		<header className="--navbar-header">
			<p
				onClick={() => {
					setSection('home');
				}}
				className="--navbar-brand"
				title="Sanjay S"
			>
				Sanjay S
			</p>
			<nav className="--navbar-nav header">
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
							{sectionToLabel(item.id)}
						</li>
					))}
				</ul>
			</nav>
			<p className="--navbar-footer">&copy; 2024 Sanjay S</p>
		</header>
	);
}
