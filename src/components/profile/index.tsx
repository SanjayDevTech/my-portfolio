import React from "react";

import * as Styles from "./styles";

const IMAGE_URL =
	"https://en.gravatar.com/userimage/138806607/d6fbfb4048a09eb0f873c8a0cc6b9bfc.png?size=500";

function Profile() {
	return (
		<Styles.Wrapper>
			<Styles.BGLayer />
			<Styles.ProfileImage src={IMAGE_URL} alt={"Sanjay"} />
		</Styles.Wrapper>
	);
}

export default Profile;
