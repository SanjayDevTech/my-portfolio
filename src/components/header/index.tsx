import * as Styles from "./styles";

import brandImage from "#assets/brand.png";
import { useLocation } from "react-router-dom";

function Header() {

	const location = useLocation();

	return (
		<Styles.Wrapper>
			<Styles.BrandImage src={brandImage} alt={"Brand"} />
			<Styles.Grow />
			<Styles.ActionText href={"/"}>Home</Styles.ActionText>
			<Styles.ActionText href={"/about"}>About</Styles.ActionText>
			<Styles.ActionText href={"/projects"}>Projects</Styles.ActionText>
		</Styles.Wrapper>
	);
}

export default Header;
