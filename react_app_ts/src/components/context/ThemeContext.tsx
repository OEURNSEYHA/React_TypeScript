import { createContext, useContext } from "react";
import { theme } from "./Theme";
type ThemeContextProviderProps = {
  children: React.ReactNode;
};
const ThemeContext = createContext(theme);

export const ThemeProvider = () => useContext(ThemeContext);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
