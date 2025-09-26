import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { ComplaintModal } from "@/components/Modal/ComplaintModal";

const studentMock = {
  name: "DEYVID GUSTAVO CORREIA DE SOUSA",
  cpf: "123.456.678-90",
  phone: "4002-8922",
  institution: "Unifavip Wyden",
  shift: "Noite",
  days: "Segunda à Sexta",
};

export default function InformationOfStudent() {
  const { colors } = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();

  const studentInfo = [
    { category: "CPF", value: studentMock.cpf },
    { category: "Telefone", value: studentMock.phone },
    { category: "Instituição de Ensino", value: studentMock.institution },
    { category: "Turno", value: studentMock.shift },
    { category: "Dias da semana", value: studentMock.days },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={150} color={colors.primary} />
        <Text style={[styles.title, { color: colors.onSurface }]}>
          {studentMock.name} {id}
        </Text>
      </View>

      <FlatList
        data={studentInfo}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <Information category={item.category} information={item.value} />
        )}
        contentContainerStyle={styles.infoWrapper}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <ComplaintModal />
    </View>
  );
}

function Information({
  category,
  information,
  style,
}: {
  category: string;
  information: string;
  style?: object;
}) {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.informationContainer, style]}
      accessibilityRole="text"
      accessibilityLabel={`${category}: ${information}`}
    >
      <Text style={[styles.category, { color: colors.primary }]}>{category}</Text>
      <Text
        style={[
          styles.text,
          { color: colors.onSurface, borderColor: colors.secondary },
        ]}
      >
        {information}
      </Text>
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
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoWrapper: {
    paddingHorizontal: 16,
    gap: 12,
  },
  informationContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 4,
  },
  category: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1.5,
    borderRadius: 8,
  },
  separator: {
    height: 8,
  },
});
