import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface GroupSelectorProps {
  groupBy: "first-letter" | "length";
  onChange: (value: "first-letter" | "length") => void;
  onSelectGroup?: (groups: string[]) => void;
}

const OPTIONS = ["first-letter", "length"] as const;

export const GroupSelector: React.FC<GroupSelectorProps> = ({
  groupBy,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);

  const selectOption = (option: "first-letter" | "length") => {
    onChange(option);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Group By:</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(true)}
      >
        <Text>{groupBy}</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.modalContent}>
            {OPTIONS.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.option}
                onPress={() => selectOption(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  dropdown: {
    backgroundColor: "#eee",
    padding: 8,
    textAlign: "center",
    borderRadius: 6,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    marginHorizontal: 40,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    elevation: 5,
  },
  option: {
    padding: 12,
  },
});
