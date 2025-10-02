import { AuthProvider } from "@/contexts/AuthContext";
import { HomeProvider } from "@/contexts/HomeContext";
import { ThemeProvider, useThemeContext } from "@/contexts/ThemeContext";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

function LayoutWrapper() {
  const { theme } = useThemeContext();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Stack screenOptions={{ animation: "none", headerShown: false }} />
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <HomeProvider>
          <LayoutWrapper />
        </HomeProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
