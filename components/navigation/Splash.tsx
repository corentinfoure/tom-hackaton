import { RootRouteParams } from "@/App";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SplashProps = RootRouteParams<"splash">;

export const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.replace("home");
      }, 1000);
    }, [])
  );
  return (
    <Image
      style={{ flex: 1, backgroundColor: "black", width: "100%" }}
      source={require("@/assets/images/Spashscreen.png")}
      resizeMode="contain"
    />
  );
};
