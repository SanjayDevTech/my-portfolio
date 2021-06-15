const createTheme = (darkMode: boolean) => ({
	darkMode,
	bg: darkMode ? "#121212" : "#FFF",
	surface: darkMode ? "rgba(12, 12, 12, 0.7)" : "#FFF",
	text: darkMode ? "rgba(255, 255, 255, 0.87)" : "#000",
	onSurface: darkMode ? "#FFF" : "#000",
});

export default createTheme;
