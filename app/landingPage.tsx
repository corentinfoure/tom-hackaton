import { RootRouteParams } from "@/App";
import { CustomButton } from "@/components/shared/CustomButton";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ThemedText } from "@/components/style/ThemedText";
import { Pressable, StyleSheet, View } from "react-native";

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
