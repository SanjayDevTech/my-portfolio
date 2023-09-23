import Card from "../card";

import * as Styles from "./styles";

const achievements = [
	{
		img:
			"https://media-exp1.licdn.com/dms/image/C5622AQGNO2lJBMqQaA/feedshare-shrink_2048_1536/0/1615294420803?e=1625702400&v=beta&t=oO1g_1iJuJAUxMxEIuKXml2PNLislIMNUR6zvXSBA7s",
		title: "Facilitated Android Study Jams",
	},
	{
		img:
			"https://media-exp1.licdn.com/dms/image/C4D22AQFxm84aQwQf6A/feedshare-shrink_1280/0/1600268407339?e=1625702400&v=beta&t=euaZDukn11sKzkXerQFVmsTvFbrFqt_nJmNxC_gsE7M",
		title: "Core team leader at DSC SREC",
	},
	{
		img: "https://pbs.twimg.com/media/EujFxsTUcAMo-eU?format=jpg&name=small",
		title: "Girlscript SOC 2021",
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
