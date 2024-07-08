import { RootRouteParams } from "@/App";
import type { ItemData } from "@/components/shared/ContainerFullWidth";
import { ContainerFullWidth } from "@/components/shared/ContainerFullWidth";
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
      <ContainerFullWidth items={items} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
});
