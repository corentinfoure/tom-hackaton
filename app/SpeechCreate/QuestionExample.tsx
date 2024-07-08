import { ThemedText } from "@/components/style/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

type QuestionExampleProps = {
  text: string;
};

export const QuestionExample: React.FC<QuestionExampleProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle" size={24} color="#006FFD" />
      <View style={styles.textContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          {"Exemple"}
        </ThemedText>
        <ThemedText type="default">{text}</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#EAF2FF",
    borderRadius: 12,
  },
  textContainer: {
    marginLeft: 16,
  },
  title: {
    marginBottom: 4,
  },
});
