import { View, StyleSheet } from "react-native";
import { CustomButton } from "./CustomButton";

export type ItemData = {
  label: string;
  onPress: () => void;
};

export const ContainerHalfWidth: React.FC<{
  items: ItemData[];
  spacing: number;
}> = ({ items, spacing }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index, items) => {
        if (index % 2 === 0) {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: index > 0 ? spacing : 0,
              }}
            >
              <CustomButton
                title={item.label}
                handleOnPress={item.onPress}
                variant="primary"
                style={{ width: "45%" }}
              />
              {items[index + 1] && (
                <CustomButton
                  title={items[index + 1].label}
                  handleOnPress={items[index + 1].onPress}
                  variant="primary"
                  style={{ width: "45%" }}
                />
              )}
            </View>
          );
        }
        return null;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add styles if needed
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
