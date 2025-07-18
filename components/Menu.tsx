import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Menu = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="home" size={24} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="alert-circle" size={24} color="black" />
        <Text>Alerta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="person-sharp" size={24} color="black" />
        <Text>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navButton: {
    alignItems: "center",
  },
});
