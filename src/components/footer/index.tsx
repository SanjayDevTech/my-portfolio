import React from "react";

import * as Styles from "./styles";

import linkedinIcon from "#assets/linkedin.svg";
import twitterIcon from "#assets/twitter.svg";
import githubIcon from "#assets/github.svg";
import gmailIcon from "#assets/gmail.svg";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<Styles.Wrapper>
			<Styles.SocialMediaRow>
				<Styles.SocialIconWrapper>
					<Styles.Link href={"mailto:sureshsanjay805@gmail.com"}>
						<Styles.SocialIcon src={gmailIcon} alt={"GMail"} />
					</Styles.Link>
				</Styles.SocialIconWrapper>
				<Styles.SocialIconWrapper>
					<Styles.Link href={"https://linkedin.com/in/sanjaydevtech"}>
						<Styles.SocialIcon src={linkedinIcon} alt={"LinkedIn"} />
					</Styles.Link>
				</Styles.SocialIconWrapper>
				<Styles.SocialIconWrapper>
					<Styles.Link href={"https://twitter.com/SanjayDevTech"}>
						<Styles.SocialIcon src={twitterIcon} alt={"Twitter"} />
					</Styles.Link>
				</Styles.SocialIconWrapper>
				<Styles.SocialIconWrapper>
					<Styles.Link href={"https://github.com/SanjayDevTech"}>
						<Styles.SocialIcon src={githubIcon} alt={"GitHub"} />
					</Styles.Link>
				</Styles.SocialIconWrapper>
			</Styles.SocialMediaRow>
			<Styles.ContentWrapper>Copyright &copy; {year}</Styles.ContentWrapper>
			<Styles.Attribution>
				Icons made by
				<a href="https://www.freepik.com" title="Freepik">
					Freepik
				</a>
				from
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</Styles.Attribution>
		</Styles.Wrapper>
	);
}

export default Footer;
