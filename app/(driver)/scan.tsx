import { Button } from "@/components/Button";
import { Menu } from "@/components/Menu";
import { View, Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useTheme } from "react-native-paper";

export default function Scan() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.main}>
        <Image
          source={require("../../assets/images/scan.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Button text="Ler o QrCode" onPress={() => router.push("/vacancy")} />
      </View>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 24, 
  },
  image: {
    width: "80%",
    maxHeight: 300,
    marginBottom: 16,
  },
});
