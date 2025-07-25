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
  mask?: string;
  onValueChange?: (value: string) => void;
}

function cpfApplyMask(value: string) {
  return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

export const Input = ({
  label,
  initialValue = "",
  mask,
  onValueChange,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (text: string) => {
    let newValue = text;

    if (mask === "cpf") {
      const onlyNumbers = text.replace(/\D/g, "").slice(0, 11);

      if (onlyNumbers.length <= 11) {
        newValue = onlyNumbers;
      }

      if (onlyNumbers.length === 11) {
        newValue = cpfApplyMask(onlyNumbers);
      }
    }

    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
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
