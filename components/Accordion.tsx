import React, { useState, useRef } from "react";
import { View, Text, Pressable, Animated, StyleSheet, LayoutChangeEvent } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type AccordionProps = {
  title: string;
  color?: "red" | "yellow" | "green" | "blue";
  children: React.ReactNode;
};

export default function Accordion({ title, color = "blue", children }: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    const finalValue = expanded ? 0 : 1;
    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  const getColor = () => {
    switch (color) {
      case "red": return "#C62828";
      case "yellow": return "#FBC02D";
      case "green": return "#2E7D32";
      case "blue": return "#1565C0";
      default: return "#ccc";
    }
  };

  return (
    <View style={[styles.container, { borderColor: getColor() }]}>
      <Pressable
        style={[styles.header, { backgroundColor: getColor() }]}
        onPress={toggleAccordion}
      >
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={24}
          color="#fff"
        />
      </Pressable>

      <Animated.View style={{ height, overflow: "hidden" }}>
        <View
          onLayout={(event: LayoutChangeEvent) =>
            setContentHeight(event.nativeEvent.layout.height)
          }
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
