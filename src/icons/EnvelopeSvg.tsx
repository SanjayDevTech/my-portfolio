import { SVGProps } from 'react';

export default function EnvelopeSvg(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="currentColor"
			width="52"
			height="52"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
		>
			<path
				d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6z
         M56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15
        c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z"
			/>
		</svg>
	);
}
