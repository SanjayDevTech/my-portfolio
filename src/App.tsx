import { ThemeProvider } from "styled-components";

import AppRoutes from "./AppRoutes";
import { createTheme } from "#theme";

export default function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <AppRoutes />
    </ThemeProvider>
  );
}
