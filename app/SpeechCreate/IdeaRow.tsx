import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Idea } from "./CreateIdea";
import { ThemedText } from "@/components/style/ThemedText";
import { Ionicons } from "@expo/vector-icons";

type IdeaRowProps = {
  onPressDelete: () => void;
  style?: StyleProp<ViewStyle>;
  idea: Idea;
  number: number;
};

export const IdeaRow: React.FC<IdeaRowProps> = ({
  idea,
  onPressDelete,
  style,
  number,
}) => {
  const { idea: ideaText, example } = idea;
  return (
    <View style={[styles.container, style]}>
      <View style={{ flex: 1 }}>
        <ThemedText type="subtitle">
          <View
            style={{
              backgroundColor: "#006FFD",
              width: 24,
              height: 24,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThemedText type="subtitle" style={{ color: "white" }}>
              {number}
            </ThemedText>
          </View>
          <ThemedText type="subtitle"> {ideaText} </ThemedText>
        </ThemedText>
        <ThemedText type="default">{"Exemple: " + example}</ThemedText>
      </View>
      <Pressable onPress={onPressDelete} hitSlop={20}>
        <Ionicons name="close-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#B4DBFF",
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
