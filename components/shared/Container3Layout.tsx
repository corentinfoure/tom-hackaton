import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
  PressableProps,
} from "react-native";
import { ThemedText } from "../style/ThemedText";

export type ItemData = {
  title: string;
  image: ImageSourcePropType;
} & Omit<PressableProps, "style">;

export const Container3Layout: React.FC<{ items: ItemData[] }> = ({
  items,
}) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const { image, title, ...rest } = item;
        return (
          <Pressable
            {...rest}
            style={[styles.itemContainer, { marginTop: index > 0 ? 10 : 0 }]}
            key={item.title}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <ThemedText type="subtitle" style={styles.title}>
              {item.title}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    borderRadius: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {},
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginVertical: 5,
  },
});