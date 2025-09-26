import { BusPlan } from "@/components/BusPlan";
import { ListModal } from "@/components/Modal/ListModal";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function Vacancy() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <BusPlan />
      <ListModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
