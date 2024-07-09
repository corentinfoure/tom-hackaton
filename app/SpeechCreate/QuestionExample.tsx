import { ThemedText } from "@/components/style/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type QuestionExampleProps = {
  text: string;
  titleExample?: string;

  style?: StyleProp<ViewStyle>;
};

export const QuestionExample: React.FC<QuestionExampleProps> = ({
  text,
  titleExample = "Exemple",
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Ionicons name="information-circle" size={24} color="#006FFD" />
      <View style={styles.textContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          {titleExample}
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
    marginTop: 20,
  },
  textContainer: {
    marginLeft: 16,
  },
  title: {
    marginBottom: 4,
  },
});
