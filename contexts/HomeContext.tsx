import { createContext, useContext, useEffect, useState } from "react";
import { router, usePathname } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const routeMap = {
  home: "/(student)/(home)/student-home",
  routeTracker: "/(student)/(home)/routeTracker",
  passengerChecklist: "/(student)/(home)/passengerChecklist",
} as const;

type RouteKey = keyof typeof routeMap;

type HomeContextType = {
  currentScreen: RouteKey;
  loading: boolean;
  avancarFluxo: () => Promise<void>;
  resetFluxo: () => Promise<void>;
  voltarParaHomeAnterior: () => Promise<void>;
};

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [currentScreen, setCurrentScreen] = useState<RouteKey>("home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundEntry = Object.entries(routeMap).find(
      ([, path]) => path === pathname
    );
    if (foundEntry) {
      const [screenKey] = foundEntry;
      const screen = screenKey as RouteKey;
      if (screen !== currentScreen) {
        setCurrentScreen(screen);
        AsyncStorage.setItem("locationHome", screen);
      }
    }
  }, [pathname]);

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("locationHome");
      if (saved && saved in routeMap) {
        setCurrentScreen(saved as RouteKey);
        router.replace(routeMap[saved as RouteKey]);
      }
      setLoading(false);
    })();
  }, []);

  const voltarParaHomeAnterior = async () => {
    const saved = await AsyncStorage.getItem("locationHome");
    const screen = saved && saved in routeMap ? (saved as RouteKey) : "home";
    goTo(screen);
  };

  const goTo = (screen: RouteKey) => {
    setCurrentScreen(screen);
    router.replace(routeMap[screen]);
  };

  const avancarFluxo = async () => {
    let nextScreen: RouteKey;
    switch (currentScreen) {
      case "home":
        nextScreen = "routeTracker";
        break;
      case "routeTracker":
        nextScreen = "passengerChecklist";
        break;
      case "passengerChecklist":
        nextScreen = "routeTracker";
        break;
      default:
        nextScreen = "home";
    }
    await AsyncStorage.setItem("locationHome", nextScreen);
    goTo(nextScreen);
  };

  const resetFluxo = async () => {
    await AsyncStorage.setItem("locationHome", "home");
    goTo("home");
  };

  return (
    <HomeContext.Provider
      value={{
        currentScreen,
        loading,
        avancarFluxo,
        resetFluxo,
        voltarParaHomeAnterior,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHome() {
  const ctx = useContext(HomeContext);
  if (!ctx) throw new Error("useHome deve ser usado dentro de HomeProvider");
  return ctx;
}
