import React, { useCallback } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Activity as ActivityType } from "@/hooks/useActivities";
import Activity from "./Activity";
import * as Haptics from "expo-haptics";

interface SwipableActivityProps {
  activity: ActivityType;
}

export default function SwipableActivity({ activity }: SwipableActivityProps) {
  const { deleteActivity } = useActivitiesContext();

  const handleDeleteConfirmation = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Alert.alert(
      "Confirm Delete",
      `Are you sure you want to delete the activity with ${activity.steps} steps?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            deleteActivity(activity.id);
          },
        },
      ],
      { cancelable: true }
    );
  }, [activity.id, activity.steps, deleteActivity]);

  const renderDeleteAction = useCallback(
    () => (
      <View
        style={styles.actionContainer}
        accessible
        accessibilityRole="button"
        accessibilityLabel={`Delete activity with ${activity.steps} steps`}
      >
        <Pressable onPress={handleDeleteConfirmation} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    ),
    [handleDeleteConfirmation, activity.steps]
  );

  return (
    <View style={styles.container}>
      <ReanimatedSwipeable
        friction={2}
        overshootFriction={8}
        renderRightActions={renderDeleteAction}
        renderLeftActions={renderDeleteAction}
        overshootRight={false}
        rightThreshold={80}
      >
        <Activity activity={activity} />
      </ReanimatedSwipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    width: "100%",
  },
  actionContainer: {
    justifyContent: "center",
    width: 80,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#D00414",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
