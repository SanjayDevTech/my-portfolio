import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Featured from "./components/featured";

import AppContext from "./context";
import createTheme from "./theme";

import * as Styles from "./styles";
import { storage } from "./utils";

function App() {
	const [darkMode, setDarkMode] = useState(storage("darkMode"));

	const contextValue = {
		darkMode: darkMode === "true",
		darkModeHandler: (dark: boolean) => setDarkMode(dark ? "true" : "false"),
	};

	useEffect(() => {
		storage("darkMode", darkMode === "true" ? "true" : "false");
	}, [darkMode]);

	return (
		<AppContext.Provider value={contextValue}>
			<ThemeProvider theme={createTheme(darkMode === "true")}>
				<Header />
				<Styles.Scrollable>
					<Styles.Main>
						<About />
						<Featured />
						<Contact />
					</Styles.Main>
					<Footer />
				</Styles.Scrollable>
			</ThemeProvider>
		</AppContext.Provider>
	);
}

export default App;
