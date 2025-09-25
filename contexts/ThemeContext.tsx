import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";

type ThemeContextData = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};

const CustomLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#0B573E",
    secondary: "#18996F",
    tertiary: "#A5D6A7",
    background: "#F5F5F5",
    surface: "#ffffff",
    onPrimary: "#ffffff",
    onSecondary: "#ffffff",
    text: "#57534E",
    error: "#C62828",
  },
};

const CustomDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#2E7D32",
    secondary: "#0F5C45",
    tertiary: "#1D4F29",
    background: "#1D1F1F",
    surface: "#1e1e1e",
    onPrimary: "#000000",
    onSecondary: "#ffffff",
    text: "#ffffff",
    error: "#EF5350",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const deviceScheme = useColorScheme();
  const [isDark, setIsDark] = useState(deviceScheme === "dark");

  useEffect(() => {
    setIsDark(deviceScheme === "dark");
  }, [deviceScheme]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = useMemo(
    () => (isDark ? CustomDarkTheme : CustomLightTheme),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};
