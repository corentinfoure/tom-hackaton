import { Collapsible } from "@/components/style/Collapsible";
import { ThemedText } from "@/components/style/ThemedText";
import { Image, StyleSheet, View } from "react-native";

export const Explore = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </View>
      <Collapsible title="Images">
        <ThemedText type="default">
          {" "}
          For static images, you can use thhe blablabla{" "}
        </ThemedText>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
