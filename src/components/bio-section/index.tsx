import Section from "#components/section";
import { LargeText, MediumText } from "#components/text";
import useMobile from "#hooks/useMobile";
import Profile from "../profile";

import * as Styles from "./styles";

function BioSection() {
	const isMobile = useMobile();

	const TEXT_CONTENT = (
		<Styles.ContentWrapper center={isMobile}>
			<LargeText center={isMobile} color="text">Hi, I{"\u2019"}m Sanjay</LargeText>
			<MediumText center={isMobile} width={"50%"} color="text">
				Developer
				<br />
				Open Source Enthusiast
			</MediumText>
		</Styles.ContentWrapper>
	);
	const CONTENT = (
		<>
			{isMobile && <Profile />}
			{TEXT_CONTENT}
			{!isMobile && <Profile />}
		</>
	);
	return (
		<Section backgroundColor="primaryDark">
			{CONTENT}
		</Section>
	);
}

export default BioSection;
