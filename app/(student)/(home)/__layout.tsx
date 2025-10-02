import { useHome } from "@/contexts/HomeContext";
import { router, Stack } from "expo-router";
import { useEffect } from "react";


const routeMap = {
  home: "/(student)/(home)/student-home",
  routeTracker: "/(student)/(home)/routeTracker",
  passengerChecklist: "/(student)/(home)/passengerChecklist",
} as const;

export default function RootNavigator() {
  const { currentScreen } = useHome();

  useEffect(() => {
    if (currentScreen) {
      router.replace(routeMap[currentScreen]);
    }
  }, [currentScreen]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="routeTracker" />
      <Stack.Screen name="passengerChecklist" />
    </Stack>
  );
}
