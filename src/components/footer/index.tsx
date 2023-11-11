import { useMemo } from "react";

import * as Styles from "./styles";

import { footerLinks } from "#config/links";
import { SmallText } from "#components/text";
import about from "../../../about.json";
import useMobile from "#hooks/useMobile";

function Footer() {
	const year = useMemo(() => new Date().getFullYear(), []);
	const isMobile = useMobile();

	const CONTENT = <><SmallText color="text">Designed & Developed by {about.title}</SmallText>
		<SmallText color="text">Copyright © {year} {about.title}</SmallText>
		<Styles.SocialMediaRow>
			{footerLinks.map((link) => (
				<Styles.SocialIconWrapper key={link.name}>
					<Styles.Link target="_blank" href={link.url}>
						<Styles.SocialIcon
							src={link.icon}
							alt={link.name}
						/>
					</Styles.Link>
				</Styles.SocialIconWrapper>
			))}
		</Styles.SocialMediaRow></>;

	return (
		isMobile ? <Styles.MobileWrapper>{CONTENT}</Styles.MobileWrapper> : <Styles.Wrapper>{CONTENT}</Styles.Wrapper>
	);
}

export default Footer;
