import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useAuth } from "@/contexts/AuthContext";
import React, { useState } from "react";
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
  const { login } = useAuth();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    setErro("");

    try {
      if (cpf === "12" && password === "123") {
        const type = "student";
        await login({ cpf, type });
      } else {
        const type = "driver";
        await login({ cpf, type });
      }
    } catch (error) {
      console.log("Erro no login:", error);
      setErro("Erro ao tentar fazer login.");
    }
  };

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
            source={require("../../assets/images/icon-green.png")}
          />
          <Text style={styles.title}>Bem Vindo ao Transporte</Text>
        </View>
        <View style={styles.container_input}>
          <Input
            label="CPF"
            onValueChange={setCpf}
            placeholder="CPF"
            mask="cpf"
            value={cpf}
          />
          <Input
            label="Senha"
            onValueChange={setPassword}
            placeholder="Senha"
            value={password}
            secureTextEntry
          />

          <Text style={styles.link}>Esqueceu a senha?</Text>

          <Button text="Entrar" onPress={handleLogin} />
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
    marginTop: 50,
    padding: 20,
  },
  container_logo: {
    alignItems: "center",
    marginBottom: 60,
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
  link: {
    color: "#2E7D32",
  },
});
