import { Button } from "@/components/Button";
import { useHome } from "@/contexts/HomeContext";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useTheme } from "react-native-paper";

export default function RouteTracker() {
  const { colors } = useTheme();
  const { avancarFluxo } = useHome();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/map_background.png")}
        style={styles.mapBackground}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={[styles.text, { color: colors.onBackground }]}>
            Horário de chegada estimado:
          </Text>
          <View
            style={[styles.containerTime, { backgroundColor: colors.primary }]}
          >
            <Text style={styles.textTime}>19:00</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              text="Veja o motorista"
              onPress={() => console.log("motorista")}
            />
            <Button
              text="Chegar"
              onPress={avancarFluxo}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapBackground: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  content: {
    backgroundColor: "rgba(255,255,255,0.85)", // leve transparência para o texto
    borderRadius: 12,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  containerTime: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  textTime: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});
