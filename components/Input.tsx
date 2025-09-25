import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { useTheme } from "react-native-paper";

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
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(initialValue);
  const { colors } = useTheme();

  // Animação da borda
  const borderAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(borderAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const borderColor = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.onSurface, colors.primary],
  });

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
        <Text style={[styles.label, { color: colors.onSurface }]}>{label}</Text>
      )}
      <Animated.View style={{ borderRadius: 100, borderWidth: 1, borderColor }}>
        <TextInput
          style={[styles.input, { color: colors.onSurface }]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={colors.onSurface + "99"}
          value={value}
          onChangeText={handleChange}
          {...props}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 14,
    width: "100%",
  },
});
