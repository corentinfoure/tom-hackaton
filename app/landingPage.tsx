import { ThemedText } from "@/components/style/ThemedText";
import { Pressable, View, StyleSheet } from "react-native";
import { ProgressBar } from "@/components/shared/ProgressBar";
import {
  ContainerHalfWidth,
  ItemData,
} from "@/components/shared/ContainerHalfWidth";
import { RootRouteParams } from "@/App";

type LandingPageProps = RootRouteParams<"landingPage">;

const items: ItemData[] = [
  { label: "hello", onPress: () => console.log("hello") },
  { label: "world", onPress: () => console.log("world") },
  { label: "world", onPress: () => console.log("world") },
  { label: "world", onPress: () => console.log("world") },
  { label: "world", onPress: () => console.log("world") },
  { label: "world", onPress: () => console.log("world") },
  { label: "world", onPress: () => console.log("world") },
  { label: "world", onPress: () => console.log("world") },
  { label: "world", onPress: () => console.log("world") },
];

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
      <ContainerHalfWidth items={items} spacing={5} />
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
