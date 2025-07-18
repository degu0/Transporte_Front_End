import React from "react";
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";

interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button = ({
  text,
  onPress
}: ButtonProps) => {


  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1D4F29",
    borderRadius: 100,
    paddingVertical: 20,
    alignItems: "center",
    marginTop: 8,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "semibold",
  }
});
