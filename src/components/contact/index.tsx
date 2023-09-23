import { useRef, useState } from "react";
import axios from "axios";

import * as Styles from "./styles";

function Contact() {
	const [loading, setLoading] = useState(false);
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const [msg, setMsg] = useState("");

	const sendMail = async () => {
		const name = nameRef.current?.value;
		const email = emailRef.current?.value;
		if (
			name?.trim() &&
			name?.trim().length > 2 &&
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				email || ""
			)
		) {
			setLoading(true);
			try {
				const { data } = await axios.post(
					"https://node-send-mail.azurewebsites.net/send",
					{
						name,
						email,
					}
				);
				if (data?.status) {
					setMsg("I will contact u soon");
				}
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
				const nameInput = nameRef.current;
				const emailInput = emailRef.current;
				if (nameInput && emailInput) {
					nameInput.value = "";
					emailInput.value = "";
				}
			}
		}
	};

	return (
		<Styles.Wrapper id={"contact"}>
			<Styles.ContentWrapper>
				<Styles.Input ref={nameRef} placeholder={"name"} />
				<Styles.Input ref={emailRef} placeholder={"email"} />
				<Styles.Button
					onClick={sendMail}
					disabled={loading || !!msg}
					$loading={loading}>
					{loading ? "LOADING" : msg || "SEND"}
				</Styles.Button>
			</Styles.ContentWrapper>
		</Styles.Wrapper>
	);
}

export default Contact;
