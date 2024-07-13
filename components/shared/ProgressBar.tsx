import { StyleSheet, View } from "react-native";

export type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  let fillWidth = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;
  fillWidth = Math.min(Math.max(fillWidth, 0), 100);

  return (
    <View style={[styles.container, { backgroundColor: "#E8E9F1" }]}>
      <View
        accessibilityValue={{
          min: 0,
          max: 100,
          now: fillWidth,
        }}
        style={[
          styles.fill,
          { width: `${fillWidth}%`, backgroundColor: "#006FFD" },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: "95%",
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  fill: {
    height: "100%",
    borderRadius: 10,
  },
});
