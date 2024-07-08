import { RootRouteParams } from "@/App";
import type { ItemData } from "@/components/shared/ImageContainer";
import { ImageContainer3layout } from "@/components/shared/ImageContainer";
import { SafeAreaView, StyleSheet, View } from "react-native";

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

  return (
    <SafeAreaView style={styles.titleContainer}>
      <ImageContainer3layout items={items} />
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
