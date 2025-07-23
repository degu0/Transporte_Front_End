import { Menu } from "@/components/Menu";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={80} color="#2E7D32" />
        <Text style={styles.title}>Perfil do Usuário</Text>
      </View>

      <View style={styles.infoWrapper}>
        <Information category="Nome" information="Deyvid" />
        <Information category="Email" information="deyvid@email.com" />
        <Information category="Cidade" information="Caruaru" />
      </View>

      <Menu />
    </View>
  );
}

const Information = ({
  category,
  information,
}: {
  category: string;
  information: string;
}) => (
  <View style={styles.informationContainer}>
    <Ionicons name="information-circle-outline" size={24} color="#388E3C" />
    <View style={styles.information}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.text}>{information}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  infoWrapper: {
    gap: 20,
  },
  informationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },
  information: {
    flexDirection: "column",
  },
  category: {
    fontWeight: "600",
    color: "#2E7D32",
    fontSize: 14,
  },
  text: {
    color: "#333",
    fontSize: 16,
  },
});
