import { RootRouteParams } from "@/App";
import type { ItemData } from "@/components/shared/Container3Layout";
import { Container3Layout } from "@/components/shared/Container3Layout";
import { InformationBanner } from "@/components/shared/InformationBanner";
import { ThemedText } from "@/components/style/ThemedText";
import { useEffect } from "react";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

type HomeProps = RootRouteParams<"home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const items: ItemData[] = [
    {
      image: require("@/assets/images/ConseilCard.png"),
      onPress: () => navigation.navigate("speechCreate"),
    },
    {
      image: require("@/assets/images/PrepareCard.png"),
      onPress: () => navigation.navigate("advices"),
    },
    {
      image: require("@/assets/images/ConseilCard.png"),
      onPress: () => navigation.navigate("speechPreps"),
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => navigation.navigate("landingPage")}
          style={{ marginRight: 16 }}
        >
          <ThemedText>{"T"}</ThemedText>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.titleContainer}>
      <ThemedText type='subtitle'>Que dois-je faire aujourd'hui ?</ThemedText>
      {/* <Container3Layout items={items} /> */}
      <InformationBanner title="TITLE" description="nuifhiohfoghfofhgofhofhfophfoh
      bfdigdigfigf" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
});
