import { Text, View, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "react-native-paper";

export default function Alert() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Feather name="alert-triangle" size={40} color={theme.colors.secondary} />
        <Text style={[styles.headerText, { color: theme.colors.primary }]}>
          Alertas recentes
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.messages}
        showsVerticalScrollIndicator={false}
      >
        <Message person="Deyvid" comment="Horrível" sender="other" theme={theme.colors} />
        <Message person="Davi" comment="Péssimo" sender="other" theme={theme.colors} />
        <Message person="Maria" comment="Falta organização" sender="other" theme={theme.colors} />
      </ScrollView>
    </View>
  );
}

const Message = ({
  person,
  comment,
  sender,
  theme,
}: {
  person: string;
  comment: string;
  sender: "user" | "other";
  theme: any; // poderia tipar como ReactNativePaper Colors
}) => (
  <View
    style={[
      styles.messageContainer,
      {
        alignSelf: sender === "user" ? "flex-end" : "flex-start",
        alignItems: sender === "user" ? "flex-end" : "flex-start",
      },
    ]}
  >
    <View style={styles.identification}>
      <View style={[styles.avatar, { backgroundColor: theme.secondary }]}>
        <Ionicons name="person" size={16} color="#fff" />
      </View>
      <Text style={[styles.personName, { color: theme.primary }]}>{person}</Text>
    </View>
    <View
      style={[
        styles.commentBox,
        {
          backgroundColor: sender === "user" ? theme.tertiary : theme.background,
          borderColor: sender === "user" ? theme.secondary : theme.primary,
          borderWidth: 1,
        },
      ]}
    >
      <Text style={[styles.commentText, { color: theme.onSurface }]}>{comment}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  messages: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  messageContainer: {
    marginVertical: 5,
    maxWidth: "80%",
  },
  identification: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  commentBox: {
    padding: 12,
    borderRadius: 10,
  },
  personName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  commentText: {
    fontSize: 14,
  },
});
