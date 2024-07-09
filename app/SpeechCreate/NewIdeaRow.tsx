import { ThemedText } from "@/components/style/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

type NewIdeaRowProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const NewIdeaRow: React.FC<NewIdeaRowProps> = ({ onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Ionicons name="add-outline" size={24} color="black" />
      <ThemedText type="subtitle" style={{ marginLeft: 12 }}>
        {"Ajouter une idée"}
      </ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    borderColor: "#006FFD",
    borderWidth: 1,
  },
});
