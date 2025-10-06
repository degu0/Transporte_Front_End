import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { router, usePathname } from "expo-router";
import { useTheme } from "react-native-paper";
import { useAuth } from "@/contexts/AuthContext";
import { useHome } from "@/contexts/HomeContext";

const icons = {
  home: require("../assets/images/home.png"),
  alert: require("../assets/images/alert.png"),
  chat: require("../assets/images/chat.svg"),
  user: require("../assets/images/user.png"),
};

const navItems = [
  { label: "Alerta", icon: "alert", path: "/alert", group: "student" },
  { label: "Chat", icon: "chat", path: "/chats", group: "driver" },
  { label: "Home", icon: "home", path: "home", group: "student", isHome: true },
  { label: "Home", icon: "home", path: "home", group: "driver", isHome: true },
  { label: "Perfil", icon: "user", path: "/profile", group: "bouth" },
];

const activePathsMap: Record<string, string[]> = {
  home: ["/student-home", "/routeTracker", "/passengerChecklist"],
  driver: ["/driver-home"],
};

export const Menu = () => {
  const { colors } = useTheme();
  const pathname = usePathname();
  const typeUser = useAuth();
  const { voltarParaHomeAnterior } = useHome();

  return (
    <View style={[styles.navBar, { backgroundColor: colors.surface }]}>
      {navItems.map((item) => {
        if (item.group === "bouth" || item.group === typeUser.user?.type) {
          return (
            <NavItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              isActive={
                item.isHome
                  ? activePathsMap["home"].some((p) => pathname.startsWith(p))
                  : pathname.startsWith(item.path)
              }
              onPress={() => {
                if (item.isHome) {
                  voltarParaHomeAnterior();
                } else {
                  router.push(item.path);
                }
              }}
            />
          );
        }
        return null;
      })}
    </View>
  );
};

const NavItem = ({
  icon,
  label,
  onPress,
  isActive,
}: {
  icon: keyof typeof icons;
  label: string;
  onPress: () => void;
  isActive: boolean;
}) => {
  const { colors } = useTheme();
  const activeColor = isActive ? "#18996F" : colors.onSurface;

  return (
    <Pressable
      style={({ pressed }) => [styles.navButton, pressed && { opacity: 0.5 }]}
      onPress={onPress}
      android_ripple={{ color: colors.primary, borderless: true }}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Image
        style={[styles.icon, { tintColor: activeColor }]}
        source={icons[icon]}
      />
      <Text style={[styles.navText, { color: activeColor }]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#18996F",
  },
  navButton: {
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});
