import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export const Menu = () => {
  const navigate = (destino: string) => {
    if (destino === "Home") {
      router.push("/");
    } else if (destino === "Alerta") {
      router.push("/alert");
    } else {
      router.push("/profile");
    }
  };

  return (
    <View style={styles.navBar}>
      <NavItem icon="home" label="Home" onPress={() => navigate("Home")} />
      <NavItem icon="alert-circle" label="Alerta" onPress={() => navigate("Alerta")} />
      <NavItem icon="person-sharp" label="Perfil" onPress={() => navigate("Perfil")} />
    </View>
  );
};

const NavItem = ({
  icon,
  label,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress} activeOpacity={0.7}>
    <Ionicons name={icon} size={24} color="#fff" />
    <Text style={styles.navText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2E7D32",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#fff",
    marginTop: 4,
  },
});
