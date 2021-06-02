import React from "react";
import Card from "../card";

import * as Styles from "./styles";

const achievements = [
	{
		img:
			"https://media-exp1.licdn.com/dms/image/C5622AQGNO2lJBMqQaA/feedshare-shrink_2048_1536/0/1615294420803?e=1625702400&v=beta&t=oO1g_1iJuJAUxMxEIuKXml2PNLislIMNUR6zvXSBA7s",
		title: "Andrid Study Jams",
	},
	{
		img:
			"https://media-exp1.licdn.com/dms/image/C5622AQGNO2lJBMqQaA/feedshare-shrink_2048_1536/0/1615294420803?e=1625702400&v=beta&t=oO1g_1iJuJAUxMxEIuKXml2PNLislIMNUR6zvXSBA7s",
		title: "Andrid Study Jams",
	},
	{
		img:
			"https://media-exp1.licdn.com/dms/image/C5622AQGNO2lJBMqQaA/feedshare-shrink_2048_1536/0/1615294420803?e=1625702400&v=beta&t=oO1g_1iJuJAUxMxEIuKXml2PNLislIMNUR6zvXSBA7s",
		title: "Andrid Study Jams",
	},
	{
		img:
			"https://media-exp1.licdn.com/dms/image/C5622AQGNO2lJBMqQaA/feedshare-shrink_2048_1536/0/1615294420803?e=1625702400&v=beta&t=oO1g_1iJuJAUxMxEIuKXml2PNLislIMNUR6zvXSBA7s",
		title: "Andrid Study Jams",
	},
	{
		img:
			"https://media-exp1.licdn.com/dms/image/C5622AQGNO2lJBMqQaA/feedshare-shrink_2048_1536/0/1615294420803?e=1625702400&v=beta&t=oO1g_1iJuJAUxMxEIuKXml2PNLislIMNUR6zvXSBA7s",
		title: "Andrid Study Jams",
	},
	{
		img:
			"https://media-exp1.licdn.com/dms/image/C5622AQGNO2lJBMqQaA/feedshare-shrink_2048_1536/0/1615294420803?e=1625702400&v=beta&t=oO1g_1iJuJAUxMxEIuKXml2PNLislIMNUR6zvXSBA7s",
		title: "Andrid Study Jams",
	},
];

function Featured() {
	return (
		<Styles.Wrapper id={"featured"}>
			{achievements.map((a, i) => (
				<Card key={i} img={a.img} title={a.title} />
			))}
		</Styles.Wrapper>
	);
}

export default Featured;
