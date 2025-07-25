import { Menu } from "@/components/Menu";
import { Button } from "@/components/Button";
import QrCode from "../../assets/images/qrCode.png";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerAlert}>
        <Feather name="alert-triangle" size={35} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo à Home!</Text>
        <Image style={styles.image} source={QrCode} />
        <View style={styles.buttons}>
          <Button
            text="Ler QR Code"
            onPress={() => console.log("ler qrcode")}
          />
          <View style={{ height: 12 }} />
          <Button text="Sair" onPress={logout} />
        </View>
      </View>

      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  containerAlert: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 50,
    zIndex: 10,
  },
  buttons: {
    width: "100%",
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
    textAlign: "center",
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 24,
  },
});
