import { ThemedText } from "@/components/style/ThemedText";
import { StyleSheet, Text, View } from "react-native";

type FigureAndTextProps = {
  figure: number;
  text: string;
};

export const FigureAndText = ({ figure, text }: FigureAndTextProps) => {
  return (
    <View style={styles.textAndFigureContainer}>
      <View style={styles.figureContainer}>
        <Text style={styles.figure}>{figure}</Text>
      </View>
      <ThemedText type="default" style={{ flex: 1, flexWrap: "wrap" }}>
        {text}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  textAndFigureContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  figureContainer: {
    backgroundColor: "#006FFD",
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  figure: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
