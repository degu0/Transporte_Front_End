import { AuthProvider } from "@/contexts/AuthContext";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider, useThemeContext } from "@/contexts/ThemeContext";

function LayoutWrapper() {
  const { theme } = useThemeContext();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Slot />
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LayoutWrapper />
      </ThemeProvider>
    </AuthProvider>
  );
}
