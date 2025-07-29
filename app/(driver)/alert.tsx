import { Menu } from "@/components/Menu";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function Alert() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="alert-triangle" size={40} color="#2E7D32" />
        <Text style={styles.headerText}>Alertas recentes</Text>
      </View>

      <View style={styles.messages}>
        <Message person="Deyvid" comment="Horrível" />
        <Message person="Davi" comment="Péssimo" />
        <Message person="Maria" comment="Falta organização" />
      </View>

      <Menu />
    </View>
  );
}

const Message = ({ person, comment }: { person: string; comment: string }) => (
  <View style={styles.messageContainer}>
    <View style={styles.avatar}>
      <Ionicons name="person" size={24} color="#fff" />
    </View>
    <View style={styles.commentBox}>
      <Text style={styles.personName}>{person}</Text>
      <Text style={styles.commentText}>{comment}</Text>
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
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
    marginTop: 8,
  },
  messages: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 30
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  commentBox: {
    flex: 1,
  },
  personName: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
  },
});
