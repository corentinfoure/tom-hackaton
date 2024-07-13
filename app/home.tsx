import { RootRouteParams } from "@/App";
import type { ItemData } from "@/components/shared/ContainerFullWidth";
import { ContainerFullWidth } from "@/components/shared/ContainerFullWidth";
import { ThemedText } from "@/components/style/ThemedText";
import { theme } from "@/components/style/colors";
import { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSpeech } from "./SpeechCreate/hooks/useSpeech";

type HomeProps = RootRouteParams<"home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const items: ItemData[] = [
    {
      image: require("@/assets/images/edit_square.png"),
      onPress: () => {
        navigation.navigate("speechCreate");
      },
      backgroundColor: theme.homePage.background1,
      borderColor: theme.homePage.border1,
      title: "Je prépare mon discours",
    },
    {
      image: require("@/assets/images/chat_info.png"),
      onPress: () => navigation.navigate("advices"),
      backgroundColor: theme.homePage.background2,
      borderColor: theme.homePage.border2,
      title: "Mes conseils",
    },
    {
      image: require("@/assets/images/mic_external_on.png"),
      onPress: () => navigation.navigate("speechPreps"),
      backgroundColor: theme.homePage.background3,
      borderColor: theme.homePage.border3,
      title: "Mes prises de paroles",
    },
  ];

  const { top, bottom } = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingHorizontal: 24,
      }}
    >
      <ThemedText type="title" style={styles.title}>
        👋 Que dois-je faire aujourd’hui ?
      </ThemedText>
      <ContainerFullWidth items={items} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFCF6",
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
  },
});
