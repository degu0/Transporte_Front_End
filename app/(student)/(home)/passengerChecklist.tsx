import Accordion from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Menu } from "@/components/Menu";
import { useHome } from "@/contexts/HomeContext";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useTheme } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function PassengerChecklist() {
  const { goTo } = useHome();
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
      style={[styles.row, { backgroundColor: colors.surface }]}
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
          <View style={[styles.separator, { backgroundColor: colors.outline }]} />
        )}
        style={styles.list}
        nestedScrollEnabled
      />
    </Accordion>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/Bus_Icon.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <StudentListAccordion title="Em Aula" color="red" />
        <StudentListAccordion title="Aguardando" color="yellow" />
        <StudentListAccordion title="No Ônibus" color="green" />
        <StudentListAccordion title="Só voltam" color="blue" />

        <View style={styles.buttonsContainer}>
          <Button text="Sair" onPress={() => goTo("routeTracker")} />
          <Button text="Chegou" onPress={() => goTo("home")} />
        </View>
      </ScrollView>

      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  image: {
    width: width * 0.55,
    height: width * 0.45,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  cellLocation: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
  },
  cellName: {
    flex: 3,
    fontSize: 16,
  },
  separator: {
    height: 1,
    opacity: 0.3,
    marginVertical: 2,
  },
  list: {
    maxHeight: 300,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
    paddingHorizontal: 16,
  },
});
