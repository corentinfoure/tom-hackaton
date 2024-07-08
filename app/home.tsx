import { RootRouteParams } from "@/App";
import type { ItemData } from "@/components/shared/Container3Layout";
import { Container3Layout } from "@/components/shared/Container3Layout";
import { ThemedText } from "@/components/style/ThemedText";
import { useEffect } from "react";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

type HomeProps = RootRouteParams<"home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const items: ItemData[] = [
    {
      title: "Préparer une prise de parole",
      image: require("@/assets/images/react-logo.png"),
      onPress: () => navigation.navigate("speechCreate"),
    },
    {
      title: "Mes conseils",
      image: require("@/assets/images/react-logo.png"),
      onPress: () => navigation.navigate("advices"),
    },
    {
      title: "Mes prises de parole",
      image: require("@/assets/images/react-logo.png"),
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
      <Container3Layout items={items} />
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
