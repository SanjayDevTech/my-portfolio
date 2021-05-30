import React from "react";

import * as Styles from "./styles";

function Contact() {
	return (
		<Styles.Wrapper id={"contact"}>
			<Styles.ContentWrapper>
				<Styles.Input placeholder={"name"} />
				<Styles.Input placeholder={"email"} />
				<Styles.Button>SEND</Styles.Button>
			</Styles.ContentWrapper>
		</Styles.Wrapper>
	);
}

export default Contact;
