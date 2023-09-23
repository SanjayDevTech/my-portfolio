import { LargeText, MediumText } from "#components/text";
import useMobile from "#hooks/useMobile";
import Profile from "../profile";

import * as Styles from "./styles";

function About() {
	const isMobile = useMobile();
	const TEXT_CONTENT = (
			<Styles.ContentWrapper>
				<LargeText color="text">Hi, I{"\u2019"}m Sanjay</LargeText>
				<MediumText width={"50%"} color="text">
					Developer
					<br />
					Open Source Enthusiast
				</MediumText>
			</Styles.ContentWrapper>
	);
	const PROFILE = <Profile />;
	return (
		isMobile ? (
			<Styles.MobileWrapper>
				{PROFILE}
				{TEXT_CONTENT}
			</Styles.MobileWrapper>
		) : (
			<Styles.Wrapper>
				{TEXT_CONTENT}
				{PROFILE}
			</Styles.Wrapper>
		)
	);
}

export default About;
