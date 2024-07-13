import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../style/ThemedText";
import { theme } from "../style/colors";

export type ItemData = {
  label: string;
  value: string;
  onPress: (value: string) => void;
};

const DottedSuggestion: React.FC<ItemData> = ({ label, onPress, value }) => {
  return (
    <Pressable
      style={{
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: theme.button.primary.background,
        borderRadius: 4,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
      onPress={() => onPress(value)}
    >
      <ThemedText type="defaultSemiBold">{label}</ThemedText>
    </Pressable>
  );
};

export const ContainerHalfWidth: React.FC<{
  items: ItemData[];
  spacing: number;
  style?: StyleProp<ViewStyle>;
}> = ({ items, spacing, style }) => {
  return (
    <View style={[styles.container, style]}>
      {items.map((item, index, items) => {
        if (index % 2 === 0) {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: index > 0 ? spacing : 0,
                gap: spacing,
              }}
            >
              <DottedSuggestion {...item} />
              {items[index + 1] && <DottedSuggestion {...items[index + 1]} />}
            </View>
          );
        }
        return null;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
