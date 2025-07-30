import React, { useState } from "react";
import { View, TouchableOpacity, Alert, StyleSheet, Text } from "react-native";
import Svg, { Rect, Circle, Line } from "react-native-svg";
import { useTheme } from "react-native-paper";

const colunas = 4;
const linhas = 8;

const seatSize = 45;
const padding = 10;
const offsetX = 50;
const offsetY = 20;

const assentosIniciais = Array.from({ length: linhas }, () =>
  Array.from({ length: colunas }, () => (Math.random() < 0.2 ? 1 : 0))
);

export const BusPlan = () => {
  const { colors } = useTheme();
  const [assentos, setAssentos] = useState(assentosIniciais);
  const [selecionado, setSelecionado] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const handlePress = (i: number, j: number) => {
    if (assentos[i][j] === 1) {
      Alert.alert("Assento ocupado");
      return;
    }
    setSelecionado({ row: i, col: j });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Svg width="100%" height="100%">
        <Rect
          x={25}
          y={0}
          width={270}
          height={550}
          fill={colors.background}
          stroke={colors.onSurface}
          strokeWidth={3}
          rx={20}
        />
        {assentos.map((linha, i) =>
          linha.map((valor, j) => {
            const x =
              j * (seatSize + padding) + (j >= 2 ? padding : 0) + offsetX;
            const y = i * (seatSize + padding) + offsetY;

            let color = valor === 1 ? colors.error : colors.secondary;
            if (selecionado && selecionado.row === i && selecionado.col === j) {
              color = "#2196f3";
            }

            return (
              <Rect
                key={`seat-${i}-${j}`}
                x={x}
                y={y}
                width={seatSize}
                height={seatSize}
                rx={5}
                fill={color}
              />
            );
          })
        )}
        <Line
          x1={24}
          y1={480}
          x2={296}
          y2={480}
          stroke={colors.onSurface}
          strokeWidth={2}
        />
        <Circle cx={240} cy={514} r={18} fill={colors.onSurface} />
      </Svg>
      {assentos.map((linha, i) =>
        linha.map((_, j) => {
          const x = j * (seatSize + padding) + (j >= 2 ? padding : 0) + offsetX;
          const y = i * (seatSize + padding) + offsetY;

          return (
            <TouchableOpacity
              key={`touch-${i}-${j}`}
              style={[styles.touchArea, { left: x, top: y }]}
              onPress={() => handlePress(i, j)}
            />
          );
        })
      )}

      <View style={styles.explainContainer}>
        <View style={{ gap: 10 }}>
          <View style={styles.information}>
            <View
              style={[styles.squareInformation, { backgroundColor: "#2196f3" }]}
            />
            <Text style={[styles.textInformation, { color: colors.onSurface }]}>
              Selecionado
            </Text>
          </View>
          <View style={styles.information}>
            <View
              style={[
                styles.squareInformation,
                { backgroundColor: colors.secondary },
              ]}
            />
            <Text style={[styles.textInformation, { color: colors.onSurface }]}>
              Disponível
            </Text>
          </View>
          <View style={styles.information}>
            <View
              style={[
                styles.squareInformation,
                { backgroundColor: colors.error },
              ]}
            />
            <Text style={[styles.textInformation, { color: colors.onSurface }]}>
              Indisponível
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={[
              styles.buttonInformation,
              { backgroundColor: colors.primary },
            ]}
          >
            <Text style={{ color: "#fff" }}>Ver Rotas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 320,
    height: 700,
  },
  touchArea: {
    position: "absolute",
    width: seatSize,
    height: seatSize,
    zIndex: 10,
  },
  explainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginTop: 16,
  },
  information: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  squareInformation: {
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  textInformation: {
    fontWeight: "600",
    fontSize: 16,
  },
  buttonInformation: {
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: "center",
    marginTop: 8,
  },
});
