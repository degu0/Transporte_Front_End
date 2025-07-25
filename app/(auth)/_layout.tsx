import { Stack , Redirect } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function PublicLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (user) return <Redirect href="/(tabs)/home" />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
