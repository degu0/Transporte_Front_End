import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label: string;
  initialValue?: string;
  onValueChange?: (value: string) => void;
}

export const Input = ({
  label,
  initialValue = "",
  onValueChange,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (text: string) => {
    setValue(text);
    if (onValueChange) {
      onValueChange(text);
    }
  };

  return (
    <View>
      {label && (
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#333" }}>
          {label}
        </Text>
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor="#1e1e1e"
        value={value}
        onChangeText={handleChange}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
    marginBottom: 16,
    width: "100%",
  },
});
