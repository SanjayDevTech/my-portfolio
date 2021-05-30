import React, { useContext } from "react";

import AppContext from "../../context";

import * as Styles from "./styles";

import brandImage from "../../assets/brand.png";
import lightIcon from "../../assets/light-icon.svg";
import darkIcon from "../../assets/dark-icon.svg";

function Header() {
	const { darkMode, darkModeHandler } = useContext(AppContext);

	const toggleDarkMode = () => {
		darkModeHandler(!darkMode);
	};

	return (
		<Styles.Wrapper>
			<Styles.BrandImage src={brandImage} alt={"Brand"} />
			<Styles.Grow />
			<Styles.ActionText href={"#about"}>about</Styles.ActionText>
			<Styles.ActionText href={"#featured"}>featured</Styles.ActionText>
			<Styles.ActionText href={"#contact"}>contact</Styles.ActionText>
			<Styles.ActionIcon
				src={darkMode ? lightIcon : darkIcon}
				alt={"Toggle dark mode"}
				onClick={toggleDarkMode}
			/>
		</Styles.Wrapper>
	);
}

export default Header;
