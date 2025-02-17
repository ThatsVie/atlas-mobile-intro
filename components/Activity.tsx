import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Activity as ActivityType } from "@/hooks/useActivities";

interface ActivityProps {
  activity: ActivityType;
}

export default function Activity({ activity }: ActivityProps) {
  return (
    <View style={styles.activityContainer} accessible accessibilityLabel={`Activity with ${activity.steps} steps`}>
      <Text style={styles.dateText} allowFontScaling>
        {new Date(activity.date * 1000).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}
      </Text>
      <Text style={styles.stepsText} allowFontScaling>
        Steps: {activity.steps}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#FFFEFE",
  },
  dateText: {
    fontSize: 13,
    paddingBottom: 8,
  },
  stepsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
