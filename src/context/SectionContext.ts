import { createContext } from "react";

const SectionContext = createContext<readonly [string,  (section: string) => void]>(["", () => {}] as const);

export default SectionContext;
