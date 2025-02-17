import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import * as Haptics from "expo-haptics";

export default function AddActivity() {
  const [steps, setSteps] = useState<number>(0);
  const { insertActivity } = useActivitiesContext();

  const handleAddActivity = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    insertActivity(steps, new Date());
    router.push("/");
  };

  const handleGoBack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push("/");
  };

  return (
    <View style={styles.container} accessible accessibilityLabel="Add Activity Screen">
      <Text style={styles.addActivity} allowFontScaling>
        Add Activity
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter steps"
        keyboardType="number-pad"
        accessibilityLabel="Steps input field"
        accessibilityHint="Enter the number of steps taken"
        onChangeText={(value) => setSteps(parseInt(value))}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && { transform: [{ scale: 0.95 }] },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Add Activity"
          accessibilityHint="Adds the activity and returns to the home screen"
          onPress={handleAddActivity}
        >
          <Text style={styles.buttonText} allowFontScaling>
            Add Activity
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            pressed && { transform: [{ scale: 0.95 }] },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Go Back"
          accessibilityHint="Returns to the home screen"
          onPress={handleGoBack}
        >
          <Text style={styles.buttonText} allowFontScaling>
            Go Back
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 2,
    paddingTop: 50,
    backgroundColor: "#FEF9E6",
  },
  input: {
    padding: 16,
    width: "100%",
    backgroundColor: "white",
    color: "black",
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 12,
    fontSize: 16,
  },
  addActivity: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#1ED2AF",
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    backgroundColor: "#D00414",
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
