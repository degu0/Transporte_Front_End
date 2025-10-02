import { Stack, Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function PublicLayout() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (user) {
    if (user.type === "student") {
      return <Redirect href="/(student)/(home)/home" />;
    }
    if (user.type === "driver") {
      return <Redirect href="/(driver)/home" />;
    }
    logout()
    return <Redirect href="/(auth)/login" />;
  }

  return <Stack screenOptions={{ animation: "none", headerShown: false }} />;
}
