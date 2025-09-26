import Accordion from "@/components/Accordion";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import { useTheme } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function PassengerChecklist() {
  const { colors } = useTheme();

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
    console.log(`id aluno: ${id}`);
  };

  const renderStudent = ({
    item,
  }: {
    item: { id: number; location: string; name: string };
  }) => (
    <Pressable
      style={[styles.row, { backgroundColor: "#F0F0F0" }]}
      onPress={() => handleInformationOfStudent(item.id)}
    >
      <Text style={[styles.cellLocation, { color: colors.surface }]}>
        {item.location}
      </Text>
      <Text style={[styles.cellName, { color: colors.surface }]}>
        {item.name}
      </Text>
    </Pressable>
  );

  const StudentListAccordion = ({
    title,
    color,
  }: {
    title: string;
    color?: "red" | "yellow" | "green" | "blue";
  }) => (
    <Accordion title={title} color={color}>
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
    </Accordion>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Bus_Icon.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <StudentListAccordion title="Em Aula" color="red" />
      <StudentListAccordion title="Aguardando" color="yellow" />
      <StudentListAccordion title="No Ônibus" color="green" />
      <StudentListAccordion title="Só voltam" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: width * 0.55,
    height: width * 0.45,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  cellLocation: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
  },
  cellName: {
    flex: 3,
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    opacity: 0.3,
  },
  list: {
    maxHeight: 300,
  },
});
