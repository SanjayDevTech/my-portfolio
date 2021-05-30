import { createContext } from "react";

const AppContext = createContext({
	darkMode: false,
	darkModeHandler: (darkMode: boolean) => {},
});

export default AppContext;
