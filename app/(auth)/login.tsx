import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useAuth } from "@/contexts/AuthContext";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "react-native-paper";

export default function Login() {
  const { login } = useAuth();
  const { colors } = useTheme();
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
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container_logo}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/icon-light.png")}
          />
          <Text style={[styles.title,{ color: "#3EA382" }]}>
            CONECTA
          </Text>
          <Text style={[styles.title, { color: "#0B573E" }]}>
            TRANSPORTE
          </Text>
        </View>

        <View>
          <Text style={styles.subtitle}>Faça Login</Text>
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

          <Text style={[styles.link, { color: colors.primary }]}>
            Esqueceu a senha? clique aqui
          </Text>

          <Button text="Entrar" onPress={handleLogin} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: 50,
    padding: 30,
  },
  toggleButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  container_logo: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 166,
    height: 107,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center", 
    marginBottom: 30,
  },
  container_input: {
    gap: 15,
    width: "100%",
    maxWidth: 400,
  },
  link: {
    textAlign: "right",
  },
});
