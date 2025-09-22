import { Menu } from "@/components/Menu";
import { router } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function Tag() {
  const { colors } = useTheme();

  const InformationTags = ({
    quantityPeople,
    tag,
    color,
  }: {
    quantityPeople: string;
    tag: string;
    color: string;
  }) => {
    return (
      <View style={styles.tag}>
        <View
          style={[styles.tagBox, styles.quantityBox, { backgroundColor: color }]}
        >
          <Text style={styles.quantityText}>{quantityPeople}</Text>
        </View>
        <View style={[styles.tagBox, { backgroundColor: color, flex: 1 }]}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Horário de saída padrão!</Text>

        <View style={styles.containerImage}>
          <Image
            source={require("../../assets/images/Bus_Icon.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.titleTime}>22:02</Text>
        </View>

        <View style={styles.containerTags}>
          <InformationTags quantityPeople="5" tag="Em aula" color="#FF0000" />
          <InformationTags quantityPeople="15" tag="Aguardando" color="#FFD700" />
          <InformationTags quantityPeople="25" tag="No ônibus" color="#058B03" />
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: colors.primary,
              shadowColor: colors.primary,
            },
          ]}
          onPress={() => router.push("/scan")}
          activeOpacity={0.85}
          accessibilityRole="button"
          accessibilityLabel="Ler QR Code"
        >
          <Text style={[styles.buttonText, { color: colors.background }]}>
            Ler o QR Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 28,
  },
  image: {
    width: width * 0.55,
    height: width * 0.45,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#222",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  titleTime: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1C1C1C",
    letterSpacing: 1,
  },
  containerTags: {
    flexDirection: "column",
    width: "100%",
    gap: 14,
    paddingHorizontal: 12,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  tagBox: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  quantityBox: {
    minWidth: 55,
    borderRadius: 50,
  },
  quantityText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  tagText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    width: "90%",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
    elevation: 4,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
