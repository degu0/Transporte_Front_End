import { Switch } from "react-native";
import { useTheme } from "react-native-paper";

export function ThemedSwitch({
  value,
  onToggle,
}: {
  value: boolean;
  onToggle: () => void;
}) {
  const { colors } = useTheme();

  return (
    <Switch
      value={value}
      onValueChange={onToggle}
      trackColor={{
        false: colors.outlineVariant ?? "#767577",
        true: colors.primary ?? colors.secondary,
      }}
      thumbColor={colors.onSurface}
      ios_backgroundColor={colors.outlineVariant ?? "#3e3e3e"}
    />
  );
}
