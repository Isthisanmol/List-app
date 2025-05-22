import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface NameItemProps {
  name: string;
}

export const NameItem: React.FC<NameItemProps> = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    fontSize: 16,
  },
});
