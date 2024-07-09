import { ThemedText } from "@/components/style/ThemedText";
import { Pressable, View, StyleSheet } from "react-native";
import { ProgressBar } from "@/components/shared/ProgressBar";
import {
  ContainerHalfWidth,
  ItemData,
} from "@/components/shared/ContainerHalfWidth";
import { RootRouteParams } from "@/App";
import { CustomButton } from "@/components/shared/CustomButton";

type LandingPageProps = RootRouteParams<"landingPage">;


export const LandingPage: React.FC<LandingPageProps> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <ProgressBar currentStep={1} totalSteps={6} />
      <Pressable onPress={() => navigation.navigate("home")}>
        <ThemedText type="link">Landing page</ThemedText>
      </Pressable>

      <CustomButton
        title="Primary"
        variant="primary"
        handleOnPress={() => {}}
      />
      <CustomButton
        title="secondary"
        variant="secondary"
        handleOnPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});
