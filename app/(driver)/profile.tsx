import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import { HeaderMenu } from "@/components/HeaderMenu";
import { Menu } from "@/components/Menu";

export default function Profile() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderMenu />

      <View style={styles.header}>
        <View style={styles.icon_header}>
          <Image source={require("../../assets/images/user.png")}/>
        </View>
        <Text style={[styles.title, { color: colors.primary }]}>Perfil do Usuário</Text>
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

function Information({
  category,
  information,
}: {
  category: string;
  information: string;
}) {
  const { colors } = useTheme();

  return (
    <View style={[styles.informationContainer, { backgroundColor: colors.elevation.level1 }]}>
      <Ionicons name="information-circle-outline" size={24} color={colors.primary} />
      <View style={styles.information}>
        <Text style={[styles.category, { color: colors.primary }]}>{category}</Text>
        <Text style={[styles.text, { color: colors.onSurface }]}>{information}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  icon_header:{
    width: "auto",
    backgroundColor: "#18996F",
    borderRadius: 50
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
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
    fontSize: 14,
  },
  text: {
    fontSize: 16,
  },
});
