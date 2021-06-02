import React from "react";
import Profile from "../profile";

import * as Styles from "./styles";

function About() {
	return (
		<Styles.Wrapper id={"about"}>
			<Styles.ContentWrapper>
				<Styles.TitleText>Sanjay S</Styles.TitleText>
				<Styles.SubTitleText margin={"30px 0 0"}>
					hey, I,m Sanjay. I am a Android Developer
				</Styles.SubTitleText>
				<Styles.SubTitleText margin={"30px 0 0"}>
					<Styles.TextListItem>Android Developer</Styles.TextListItem>
					<Styles.TextListItem>MERN stack Developer</Styles.TextListItem>
					<Styles.TextListItem>Open source entusiast</Styles.TextListItem>
				</Styles.SubTitleText>
			</Styles.ContentWrapper>
			<Profile />
		</Styles.Wrapper>
	);
}

export default About;
