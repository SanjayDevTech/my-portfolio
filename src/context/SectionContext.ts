import { createContext } from "react";

const SectionContext = createContext(["", (section: string) => console.log("SectionContext")]);

export default SectionContext;
