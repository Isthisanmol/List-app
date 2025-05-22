import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  onChange: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const [text, setText] = useState("");

  const debouncedChange = debounce(onChange, 1000);

  useEffect(() => {
    debouncedChange(text);
    return () => debouncedChange.cancel();
  }, [debouncedChange, text]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search names..."
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});
