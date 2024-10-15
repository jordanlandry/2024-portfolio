import { createContext } from "react";
import { SetState } from "./types";

type NavHeightContextType = { navHeight: number; setNavHeight: SetState<number> };
export const NavHeightContext = createContext({} as NavHeightContextType);

