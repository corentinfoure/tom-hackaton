import {
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
} from "react-native";
import { ThemedText } from "../style/ThemedText";

export type ItemData = {
  title?: string;
  image: ImageSourcePropType;
  backgroundColor?: string;
  borderColor?: string;
} & Omit<PressableProps, "style">;

export const ContainerFullWidth: React.FC<{ items: ItemData[] }> = ({
  items,
}) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const { image, title, backgroundColor, borderColor, ...rest } = item;
        return (
          <Pressable
            {...rest}
            style={[
              styles.itemContainer,
              {
                marginTop: index > 0 ? 10 : 0,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
              },
            ]}
            key={index}
          >
            <Image source={item.image} style={styles.image} />
            {title && (
              <ThemedText type="subtitle" style={styles.title}>
                {item.title}
              </ThemedText>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  itemContainer: {
    borderRadius: 10,
    width: "100%",
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginVertical: 10,
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginVertical: 5,
  },
});
