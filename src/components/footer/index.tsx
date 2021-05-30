import React from "react";

import * as Styles from "./styles";

import linkedinIcon from "../../assets/linkedin.svg";
import twitterIcon from "../../assets/twitter.svg";
import githubIcon from "../../assets/github.svg";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<Styles.Wrapper>
			<Styles.SocialMediaRow>
				<Styles.SocialIconWrapper>
					<Styles.SocialIcon src={linkedinIcon} alt={"LinkedIn"} />
				</Styles.SocialIconWrapper>
				<Styles.SocialIconWrapper>
					<Styles.SocialIcon src={twitterIcon} alt={"Twitter"} />
				</Styles.SocialIconWrapper>
				<Styles.SocialIconWrapper>
					<Styles.SocialIcon src={githubIcon} alt={"GitHub"} />
				</Styles.SocialIconWrapper>
			</Styles.SocialMediaRow>
			<Styles.ContentWrapper>Copyright &copy; {year}</Styles.ContentWrapper>
		</Styles.Wrapper>
	);
}

export default Footer;
