import { useMemo } from "react";

import * as Styles from "./styles";

import { footerLinks } from "#config/links";
import { SmallText } from "#components/text";
import useMobile from "#hooks/useMobile";

function Footer() {
	const year = useMemo(() => new Date().getFullYear(), []);
	const isMobile = useMobile();

	const title = import.meta.env.VITE_APP_TITLE || "Sanjay S";

	const CONTENT = <><SmallText color="text">Designed & Developed by {title}</SmallText>
		<SmallText color="text">Copyright © {year} {title}</SmallText>
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
