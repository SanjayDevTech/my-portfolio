import { StyleSheetManager, ThemeProvider } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { createTheme } from "#theme";

import AppRoutes from "./AppRoutes";

const theme = createTheme();

export default function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </StyleSheetManager>
  );
}
