import { Menu } from "@/components/Menu";
import { router } from "expo-router";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export default function Chats() {
  const { colors } = useTheme();
  const chatList = [
    { title: "Uninassau" },
    { title: "Unifavip" },
    { title: "Nova Roma" },
    { title: "Faculdade 4" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View>
        {chatList.map((item, index) => (
          <ChatItem
            key={index}
            title={item.title}
            onPress={() => router.push(`/chats/${index}`)}
          />
        ))}
      </View>
      <Menu />
    </View>
  );
}

const ChatItem = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  const { colors } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [styles.chatButton, pressed && { opacity: 0.5 }]}
      onPress={onPress}
      android_ripple={{ color: colors.primary, borderless: true }}
      accessibilityRole="button"
    >
      <Text style={[styles.chatText, { color: colors.onSurface }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  chatList: {
    flex: 1,
  },
  chatButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  chatText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000", // fallback
  },
});
