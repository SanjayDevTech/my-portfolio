import React from "react";
import Profile from "../profile";

import * as Styles from "./styles";

function About() {
	return (
		<Styles.Wrapper id={"about"}>
			<Styles.ContentWrapper>
				<Styles.TitleText>Sanjay S</Styles.TitleText>
				<Styles.SubTitleText>
					hey, I,m Sanjay. I am a Android Developer
				</Styles.SubTitleText>
				<Styles.SubTitleText>
					<ul>
						<li>Android Developer</li>
						<li>MERN stack Developer</li>
						<li>Open source entusiast</li>
					</ul>
				</Styles.SubTitleText>
			</Styles.ContentWrapper>
			<Profile />
		</Styles.Wrapper>
	);
}

export default About;
