import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import AppContext from "./context";
import createTheme from "./theme";
import { storage } from "./utils";
import AppRoutes from "./AppRoutes";

export default function App() {
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
				<AppRoutes />
			</ThemeProvider>
		</AppContext.Provider>
	);
}
