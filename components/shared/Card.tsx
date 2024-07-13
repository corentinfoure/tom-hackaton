import { StyleProp, View, ViewStyle } from "react-native";
import { ThemedText } from "../style/ThemedText";

type CardProps = {
  title: string;
  value: string;
  style?: StyleProp<ViewStyle>;
};

export const Card: React.FC<CardProps> = ({ title, value, style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: "#EFF7E1",
          padding: 16,
          borderRadius: 12,
          width: "100%",
        },
        style,
      ]}
    >
      <ThemedText style={{ marginBottom: 4 }} type="subtitle">
        {title}
      </ThemedText>
      <ThemedText type="default">{value}</ThemedText>
    </View>
  );
};
