import React from "react";

import * as Styles from "./styles";

function Contact() {
	return (
		<Styles.Wrapper id={"contact"}>
			<Styles.Input placeholder={"name"} />
			<Styles.Button>SEND</Styles.Button>
		</Styles.Wrapper>
	);
}

export default Contact;
