import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useAuth } from "@/contexts/AuthContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "react-native-paper";

export default function Login() {
  const { login } = useAuth();
  const { colors } = useTheme();
   const { isDark } = useThemeContext();

  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    setErro("");
    try {
      const type = cpf === "12" && password === "123" ? "driver" : "student";
      await login({ cpf, type });
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
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/icon-light.png")}
            resizeMode="contain"
          />
          <Text style={[styles.title, { color: "#3EA382" }]}>CONECTA</Text>
          <Text style={[styles.title, { color: "#0B573E" }]}>TRANSPORTE</Text>
        </View>

        <Text style={[styles.subtitle, {color: colors.onSurface}]}>Faça login</Text>

        <View style={styles.form}>
          <Input
            label="CPF"
            onValueChange={setCpf}
            placeholder="Digite seu CPF"
            mask="cpf"
            value={cpf}
          />
          <Input
            label="Senha"
            onValueChange={setPassword}
            placeholder="Digite sua senha"
            value={password}
            secureTextEntry
          />

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[styles.link, { color: colors.primary }]}>
              <Text style={{ color: colors.onSurface }}>Esqueceu a senha?</Text> Clique aqui
            </Text>
          </TouchableOpacity>

          {erro ? <Text style={styles.error}>{erro}</Text> : null}

          <Button text="Entrar" onPress={handleLogin} />
        </View>

        <Image
          source={isDark ? require("../../assets/images/logo_toritama_branco.png") : require("../../assets/images/logo_toritama.png")}
          style={styles.footerLogo}
          resizeMode="contain"
        />
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
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 28,
  },
  logo: {
    width: 160,
    height: 100,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 24,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    gap: 14,
  },
  link: {
    textAlign: "right",
    fontSize: 14,
    marginTop: 4,
  },
  error: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
  },
  footerLogo: {
    width: 200,
    height: 40,
    marginTop: 60,
  },
});
