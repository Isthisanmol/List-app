import { GroupSelector, NameItem, SearchBar, SortSelector } from "@/components";
import { generateNames, groupNames } from "@/utils";
import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function App() {
  const allNames = useMemo(() => generateNames(100000), []);

  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "length">("name");
  const [groupBy, setGroupBy] = useState<"first-letter" | "length">(
    "first-letter",
  );
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const groupedData = useMemo(() => {
    return groupNames(allNames, sortBy, filter, groupBy, selectedGroups);
  }, [sortBy, filter, groupBy, selectedGroups]);

  const renderItem = ({ item }: { item: string }) => (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <NameItem name={item} />
    </Animated.View>
  );

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.controls}>
        <SearchBar onChange={setFilter} />
        <View style={styles.selectors}>
          <SortSelector sortBy={sortBy} onChange={setSortBy} />
          <GroupSelector
            groupBy={groupBy}
            onChange={setGroupBy}
            onSelectGroup={setSelectedGroups}
          />
        </View>
      </View>
      <SectionList
        sections={groupedData}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={11}
        removeClippedSubviews={true}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controls: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  selectors: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  header: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
});
