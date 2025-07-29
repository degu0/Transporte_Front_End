import { Stack, Redirect } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function PublicLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (user) {
    if (user.type === "student") {
      return <Redirect href="/(student)/home" />;
    } else {
      return <Redirect href="/(driver)/home" />;
    }
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
