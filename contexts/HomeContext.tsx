import { createContext, useContext, useState } from "react";
import { router } from "expo-router";

const routeMap = {
  home: "/(student)/(home)/student-home",
  routeTracker: "/(student)/(home)/routeTracker",
  passengerChecklist: "/(student)/(home)/passengerChecklist",
} as const;

type RouteKey = keyof typeof routeMap;

type HomeContextType = {
  currentScreen: RouteKey;
  goTo: (screen: RouteKey) => void;
};

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<RouteKey>("home");

  const goTo = (screen: RouteKey) => {
    setCurrentScreen(screen);
    router.replace(routeMap[screen]);
  };

  return (
    <HomeContext.Provider value={{ currentScreen, goTo }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHome() {
  const ctx = useContext(HomeContext);
  if (!ctx) throw new Error("useHome deve ser usado dentro de HomeProvider");
  return ctx;
}
