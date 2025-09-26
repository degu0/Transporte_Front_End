import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Modal,
  Dimensions,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import { useTheme } from "react-native-paper";
import { Button } from "../Button";

export const ComplaintModal = () => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const { width } = Dimensions.get("window");

  const handleSendMessage = () => {
    console.log("Enviou o dado");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.buttonOpen, { backgroundColor: colors.error }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Relatar ocorrência</Text>
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
                Denunciar aluno Deyvid
              </Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
                hitSlop={10}
              >
                <Ionicons name="close" size={26} color={colors.primary} />
              </Pressable>
            </View>
            <TextInput
              multiline={true}
              numberOfLines={10}
              onChangeText={(newText) => setText(newText)}
              value={text}
              placeholder="Escreva..."
              style={{
                borderWidth: 1,
                borderColor: colors.onSurface,
                color: colors.onSurface,
                padding: 10,
              }}
            />
            <Button text={"Enviar"} onPress={() => handleSendMessage()} />
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
    marginBottom: 30,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    padding: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
});
