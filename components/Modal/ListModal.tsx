import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
  FlatList,
} from "react-native";
import { useTheme } from "react-native-paper";

export const ListModal = () => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const { width } = Dimensions.get("window");

  const StudentList = [
    { id: 1, location: "A1", name: "Deyvid Gustavo" },
    { id: 2, location: "A2", name: "Maria Eduarda" },
    { id: 3, location: "B1", name: "João Pedro" },
    { id: 4, location: "B2", name: "Ana Clara" },
    { id: 5, location: "C1", name: "Lucas Henrique" },
    { id: 6, location: "C2", name: "Fernanda Silva" },
    { id: 7, location: "D1", name: "Rafael Lima" },
    { id: 8, location: "D2", name: "Beatriz Souza" },
    { id: 9, location: "E1", name: "Carlos Alberto" },
    { id: 10, location: "E2", name: "Juliana Santos" },
  ];

const handleInformationOfStudent = (id: number) => {
  setModalVisible(false);
  router.push({
    pathname: "/informationOfStudent/[id]",
    params: { id: id.toString() },
  });
};


  const renderStudent = ({
    item,
  }: {
    item: { id: number; location: string; name: string };
  }) => (
    <Pressable
      style={styles.row}
      onPress={() => handleInformationOfStudent(item.id)}
    >
      <Text style={[styles.cellLocation, { color: colors.onSurface }]}>
        {item.location}
      </Text>
      <Text style={[styles.cellName, { color: colors.onSurface }]}>
        {item.name}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.buttonOpen, { backgroundColor: colors.primary }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Lista de alunos</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              { width: width * 0.9, backgroundColor: colors.surface },
            ]}
          >
            <View style={styles.closeButtonContainer}>
              <Text style={[styles.modalTitle, { color: colors.onSurface }]}>
                Lista de Alunos
              </Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
                hitSlop={10}
              >
                <Ionicons name="close" size={26} color={colors.primary} />
              </Pressable>
            </View>

            <View style={[styles.headerRow, {borderColor: colors.onSurface}]}>
              <Text
                style={[
                  styles.cellLocation,
                  styles.headerText,
                  { color: colors.onSurface },
                ]}
              >
                Local
              </Text>
              <Text
                style={[
                  styles.cellName,
                  styles.headerText,
                  { color: colors.onSurface },
                ]}
              >
                Nome
              </Text>
            </View>

            <FlatList
              data={StudentList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderStudent}
              ItemSeparatorComponent={() => (
                <View
                  style={[styles.separator, { backgroundColor: colors.outline }]}
                />
              )}
              style={styles.list}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOpen: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    marginTop: 12,
    elevation: 2,
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 16,
  },
  modalView: {
    maxWidth: 420,
    maxHeight: "80%",
    padding: 24,
    borderRadius: 16,
    gap: 12,
    elevation: 4,
  },
  closeButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  closeButton: {
    padding: 6,
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 4,
    marginBottom: 8,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  cellLocation: {
    flex: 1,
    fontWeight: "600",
    fontSize: 16,
  },
  cellName: {
    flex: 3,
    fontSize: 16,
  },
  separator: {
    height: 1,
    opacity: 0.3,
  },
  list: {
    maxHeight: 300,
  },
});
