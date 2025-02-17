import React from "react";
import { Pressable, Text, StyleSheet, Alert } from "react-native";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import * as Haptics from "expo-haptics";

export default function DeleteAllButton() {
  const { deleteAllActivities } = useActivitiesContext();

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete all activities?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            deleteAllActivities();
            Alert.alert("All activities deleted");
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.deleteButton,
        pressed && { transform: [{ scale: 0.95 }] },
      ]}
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel="Delete All"
      accessibilityHint="Deletes all activities after confirmation"
    >
      <Text style={styles.buttonText}>Delete All</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "#D00414",
    paddingVertical: 16,
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
