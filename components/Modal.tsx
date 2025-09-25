import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { useTheme } from "react-native-paper";

export const ModalComponent = () => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const { width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 16,
    },
    buttonOpen: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 32,
      alignItems: "center",
      marginTop: 12,
      elevation: 2,
    },
    textStyle: {
      color: colors.surface,
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
      width: width * 0.9,
      maxWidth: 420,
      backgroundColor: colors.surface,
      padding: 24,
      borderRadius: 16,
      gap: 12,
      elevation: 4,
    },
    closeButtonContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    closeButton: {
      padding: 6,
      borderRadius: 20,
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 8,
      textAlign: "center",
      alignSelf: "center",
      width: "100%",
    },
    informationContainer: {
      flex: 1,
      marginBottom: 6,
    },
    informationTextTitle: {
      fontWeight: "700",
      color: colors.onSurface,
      fontSize: 15,
    },
    informationTextContent: {
      color: colors.onSurface,
      fontSize: 15,
    },
    row: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 12,
    },
  });

  const Information = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => (
    <View style={styles.informationContainer}>
      <Text style={styles.informationTextTitle}>{title}</Text>
      <Text style={styles.informationTextContent}>{content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonOpen}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Consultar Informações</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeButtonContainer}>
              <Text style={styles.modalTitle}>Informações</Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
                hitSlop={10}
              >
                <Ionicons name="close" size={26} color={colors.primary} />
              </Pressable>
            </View>


            <Information title="Veículo" content="MARCOPOLO/COLARE W-L ON" />

            <View style={styles.row}>
              <Information title="Placa" content="KJ5-59G5" />
              <Information title="Capacidade" content="44 PASSAGEIROS" />
            </View>

            <View style={styles.row}>
              <Information title="Assentos Vagos" content="12 DISPONÍVEIS" />
              <Information title="Horário de saída" content="17h45" />
            </View>

            <View style={styles.row}>
              <Information title="Motorista" content="Erivan Nunes" />
              <Information title="Contato" content="(81) 99999-9999" />
            </View>

            <Information
              title="Adicionais"
              content="Carregamento, Wi-Fi e Ar-Condicionado"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
