import { useAuth } from "@/contexts/AuthContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Menu, IconButton, useTheme, Divider, Text } from "react-native-paper";

export const HeaderMenu = () => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const { logout } = useAuth();
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 10,
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon={visible ? "close" : "menu"}
            size={28}
            iconColor={colors.onBackground}
            onPress={openMenu}
          />
        }
        contentStyle={{
          backgroundColor: colors.surface,
          paddingVertical: 4,
          borderRadius: 12,
          elevation: 4,
        }}
      >
        <View style={{ paddingHorizontal: 12, paddingVertical: 4 }}>
          <Text
            variant="titleMedium"
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Menu
          </Text>
        </View>

        <Divider
          style={{ backgroundColor: colors.primary, marginVertical: 4 }}
        />

        <Menu.Item
          leadingIcon={() => (
            <IconButton
              icon="cog"
              size={24}
              iconColor="#007F5F"
              style={{ margin: -7 }}
            />
          )}
          onPress={() => {
            router.push("/settings");
            closeMenu();
          }}
          title="Configuração"
          titleStyle={{ color: colors.primary }}
        />

        <Menu.Item
          leadingIcon={() => (
            <IconButton
              icon={isDark ? "weather-sunny" : "weather-night"}
              size={24}
              iconColor="#007F5F"
              style={{ margin: -7 }}
            />
          )}
          onPress={() => {
            toggleTheme();
            closeMenu();
          }}
          title={`Modo ${isDark ? "claro" : "escuro"}`}
          titleStyle={{ color: colors.primary }}
        />

        <Divider style={{ backgroundColor: colors.outlineVariant }} />

        <Menu.Item
          leadingIcon={() => (
            <IconButton
              icon="logout"
              size={24}
              iconColor="#007F5F"
              style={{ margin: -7 }}
            />
          )}
          onPress={() => {
            logout();
            closeMenu();
          }}
          title="Sair"
          titleStyle={{ color: colors.primary }}
        />
      </Menu>
    </View>
  );
};
