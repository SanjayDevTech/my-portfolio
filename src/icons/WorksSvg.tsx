import { SVGProps } from "react";

export default function WorksSvg(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="currentColor"
			width="24"
			height="24"
			viewBox="0 0 56 56"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M 39.4615 8.1276 C 33.7743 2.4840 22.1821 1.8521 15.5362 8.5416 C 14.4467 9.6093 14.6428 10.8295 15.3836 11.5704 C 15.9066 12.1151 16.7346 12.3548 17.5191 12.1151 C 22.1603 10.6552 26.4529 10.5245 29.8739 13.0521 L 28.0436 17.9330 C 27.3463 19.8288 27.7167 21.1579 28.9587 22.4217 L 33.9922 27.4770 C 34.9945 28.5011 36.1059 28.8062 37.5658 28.4575 L 41.0959 27.6513 L 42.7953 29.3510 L 42.5119 31.8350 C 42.3597 32.8591 42.4905 33.4910 43.3839 34.3844 L 45.0832 36.0187 C 46.0204 36.9556 47.2186 37.0428 48.1120 36.1494 L 55.1066 29.1984 C 56 28.3050 55.8692 27.1066 54.9540 26.1478 L 53.2765 24.4700 C 52.4264 23.5984 51.7512 23.4241 50.7703 23.5766 L 48.2646 23.8817 L 46.5434 22.2257 L 47.5889 18.4778 C 47.9161 17.2576 47.5019 16.1245 46.1944 14.8389 Z M 2.2225 44.8000 C .1089 46.6739 0 48.6350 1.9611 50.6179 L 5.4257 54.0607 C 7.3650 56 9.3914 55.8910 11.2436 53.7992 L 32.2273 30.2443 L 25.7774 23.8163 Z" />
		</svg>
	);
}
