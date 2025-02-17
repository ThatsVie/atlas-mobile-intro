import React from "react";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { router } from "expo-router";
import { Text, View, StyleSheet, Pressable, SafeAreaView } from "react-native";
import * as Haptics from "expo-haptics";
import SwipableActivity from "@/components/SwipableActivity";
import { FlashList } from "@shopify/flash-list";
import DeleteAllButton from "@/components/DeleteAllButton";

export interface Activity {
  id: number;
  steps: number;
  date: number;
}

export default function Index() {
  const { activities } = useActivitiesContext();

  return (
    <SafeAreaView style={styles.safeArea} accessible accessibilityLabel="Home Screen">
      <View style={styles.container}>
        <View style={styles.list}>
          <FlashList
            data={activities}
            keyExtractor={(item: Activity) => item.id.toString()}
            renderItem={({ item }: { item: Activity }) => (
              <SwipableActivity activity={item} />
            )}
            estimatedItemSize={60}
            refreshing={false}
            contentContainerStyle={styles.flashList}
            accessibilityLabel="List of activities"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { transform: [{ scale: 0.95 }] },
            ]}
            accessibilityRole="button"
            accessibilityLabel="Add activity"
            accessibilityHint="Navigates to the add activity screen"
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              router.push("/add-activity");
            }}
          >
            <Text style={styles.buttonText}>Add activity</Text>
          </Pressable>
          <DeleteAllButton />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FEF9E6" },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingTop: 50,
    backgroundColor: "#FEF9E6",
  },
  list: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
  },
  flashList: {
    paddingBottom: 16,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
