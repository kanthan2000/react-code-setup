import React from "react";
import ReduxProvider from "./ReduxProvider";
import ThemeProviders from "./ThemeProviders";

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ReduxProvider>
      <ThemeProviders>{children}</ThemeProviders>
    </ReduxProvider>
  );
};

export default AppProviders;
