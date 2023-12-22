import React from "react";
import { View, Text } from "react-native";
import styles from "./titleStule";

export default function Titulo() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>
        CARGA<Text style={styles.subTextTitle}>tool</Text>
      </Text>
    </View>
  );
}
