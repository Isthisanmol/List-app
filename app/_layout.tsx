import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerTitle: "Virtulised Sorted List" }} />
    </SafeAreaProvider>
  );
}
