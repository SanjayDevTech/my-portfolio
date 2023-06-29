import colors from "./colors";
import typography from "./typography";

export const createTheme = (darkMode: boolean) => ({
  darkMode,
  bg: darkMode ? "#121212" : "#FFF",
  surface: darkMode ? "rgba(12, 12, 12, 0.7)" : "#FFF",
  text: darkMode ? "rgba(255, 255, 255, 0.87)" : "#000",
  onSurface: darkMode ? "#FFF" : "#000",
  primaryDark: colors.primary2,
  primary: colors.primary1,
});

export default {
  colors,
  typography,
};
