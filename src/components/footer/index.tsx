import React, { useMemo } from "react";

import * as Styles from "./styles";

import links from "#config/links";
import { SmallText } from "#components/text";
import about from "#config/about";
import { useMobile } from "#utils";

function Footer() {
	const year = useMemo(() => new Date().getFullYear(), []);
	const isMobile = useMobile();

	const CONTENT = <><SmallText color="text">Designed & Developed by {about.title}</SmallText>
		<SmallText color="text">Copyright © {year} {about.title}</SmallText>
		<Styles.SocialMediaRow>
			{links.map((link) => (
				<Styles.SocialIconWrapper>
					<Styles.SocialIcon
						key={link.name}
						src={link.icon}
					/>
				</Styles.SocialIconWrapper>
			))}
		</Styles.SocialMediaRow></>;

	return (
		isMobile ? <Styles.MobileWrapper>{CONTENT}</Styles.MobileWrapper> : <Styles.Wrapper>{CONTENT}</Styles.Wrapper>
	);
}

export default Footer;
