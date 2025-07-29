import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useTheme } from "react-native-paper";

export const Menu = () => {
  const { colors } = useTheme();

  const navigate = (destino: string) => {
    switch (destino) {
      case "Home":
        router.push("/home");
        break;
      case "Alerta":
        router.push("/alert");
        break;
      case "Chat":
        router.push("/chat");
        break;
      case "Perfil":
        router.push("/profile");
        break;
    }
  };

  return (
    <View style={[styles.navBar, { backgroundColor: colors.secondary }]}>
      <NavItem icon="home" label="Home" onPress={() => navigate("Home")} theme={colors} />
      <NavItem icon="alert-circle" label="Alerta" onPress={() => navigate("Alerta")} theme={colors} />
      <NavItem icon="chatbubble-outline" label="Chat" onPress={() => navigate("Chat")} theme={colors} />
      <NavItem icon="person-sharp" label="Perfil" onPress={() => navigate("Perfil")} theme={colors} />
    </View>
  );
};

const NavItem = ({
  icon,
  label,
  onPress,
  theme,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  theme: any;
}) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress} activeOpacity={0.7}>
    <Ionicons name={icon} size={24} color={theme.background} />
    <Text style={[styles.navText, { color: theme.background }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});
