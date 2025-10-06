import { Menu } from "@/components/Menu";
import { useAuth } from "@/contexts/AuthContext";
import { Redirect, Slot, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function ProtectedLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!user || user.type !== "driver") {
    return <Redirect href="/login" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
      <Menu />
    </View>
  );
}
