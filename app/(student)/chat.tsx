import { Menu } from "@/components/Menu";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Olá, test", sender: "bot", person: "Gustavo" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      person: "Você",
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Mensagem recebida!",
          sender: "bot",
          person: "Atendente",
        },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={80}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Message person={item.person} comment={item.text} sender={item.sender} />
        )}
        contentContainerStyle={styles.messages}
      />

      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendContainer} onPress={sendMessage}>
          <Ionicons name="send-sharp" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Menu />
    </KeyboardAvoidingView>
  );
}

const Message = ({
  person,
  comment,
  sender,
}: {
  person: string;
  comment: string;
  sender: string;
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
      <View style={styles.avatar}>
        <Ionicons name="person" size={12} color="#fff" />
      </View>
      <Text style={styles.personName}>{person}</Text>
    </View>
    <View
      style={[
        styles.commentBox,
        {
          backgroundColor: sender === "user" ? "#DCF8C6" : "#E0E0E0",
        },
      ]}
    >
      <Text style={styles.commentText}>{comment}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    justifyContent: "flex-end",
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  messages: {
    flexGrow: 1,
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
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#2E7D32",
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    borderColor: "#ccc",
  },
  sendContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
  },
});
