import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";

import AppContext from "./context";
import createTheme from "./theme";

import * as Styles from "./styles";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const contextValue = {
		darkMode,
		darkModeHandler: setDarkMode,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<ThemeProvider theme={createTheme(darkMode)}>
				<Header />
				<Styles.Scrollable>
					<Styles.Main>
						<About />
						<Contact />
					</Styles.Main>
					<Footer />
				</Styles.Scrollable>
			</ThemeProvider>
		</AppContext.Provider>
	);
}

export default App;
