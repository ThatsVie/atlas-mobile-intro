import { DatabaseProvider } from "@/components/DatabaseProvider";
import { ActivitiesProvider } from "@/components/ActivitiesProvider";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <DatabaseProvider>
      <ActivitiesProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView
            style={styles.safeArea}
            accessible
            accessibilityLabel="Main app content"
          >
            <Stack>
              <Stack.Screen
                name="index"
                options={{
                  headerShown: false,
                  animation: "slide_from_left", // returning to Home screen
                }}
              />
              <Stack.Screen
                name="add-activity"
                options={{
                  headerShown: false,
                  animation: "slide_from_right", // forward to Add Activity
                }}
              />
            </Stack>
          </SafeAreaView>
        </GestureHandlerRootView>
      </ActivitiesProvider>
    </DatabaseProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FEF9E6" },
});
