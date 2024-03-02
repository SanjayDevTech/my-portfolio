import clsx from 'classnames';
import { useRef } from 'react';
import useObserve from '../../hooks/useObserve';
import useSection from '../../hooks/useSection';
import './section.css';

export default function Section(props: {
	id: string;
	children?: React.ReactNode;
	tagline: string;
	classNames?: {
		container?: string;
	};
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [section] = useSection();
	useObserve(ref);
	const isCurrentSection = section === props.id;
	return (
		<section className="--section-container" ref={ref} id={props.id}>
			<p
				className={clsx('--section-tagline', {
					'--anim-fade-out': isCurrentSection,
					'--anim-fade-out-init': !isCurrentSection,
				})}
			>
				{props.tagline}
			</p>
			<div
				className={clsx(
					'--section-content',
					{
						'--anim-fade-in': isCurrentSection,
						'--anim-fade-in-init': !isCurrentSection,
					},
					props.classNames?.container,
				)}
			>
				{props.children}
			</div>
		</section>
	);
}
