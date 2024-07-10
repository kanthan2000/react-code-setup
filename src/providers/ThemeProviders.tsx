import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import { colors } from "../utils/constants";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProviders = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider
      theme={theme({
        primaryColor: colors.blue.main,
        secondaryColor: colors.green.main,
      })}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
