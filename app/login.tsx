import { Button } from "@/components/Button";
import {Input} from "@/components/Input";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container_logo}>
          <Image
            style={styles.logo}
            source={require("../assets/images/icon-green.png")}
          />
          <Text style={styles.title}>Bem Vindo ao Transporte</Text>
        </View>
        <View style={styles.container_input}>
          <Input
            label="CPF"
            onValueChange={setCpf}
            placeholder="CPF"
            value={cpf}
          />
          <Input
            label="Senha"
            onValueChange={setPassword}
            placeholder="Senha"
            value={password}
            secureTextEntry
          />

          <Button text="Entrar" onPress={() => console.log("ola")} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  container_logo: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 175,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 10,
  },
  container_input: {
    gap: 15,
    width: "100%",
    maxWidth: 400,
  },
});
