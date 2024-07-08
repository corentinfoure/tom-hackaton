import { RootRouteParams } from "@/App";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

type LandingPageProps = RootRouteParams<"landingPage">;

export const LandingPage: React.FC<LandingPageProps> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <ThemedText>Landing page</ThemedText>
    </View>
  );
};
