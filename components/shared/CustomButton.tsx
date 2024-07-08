import { View, Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../style/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type IoniconNames = keyof typeof Ionicons.glyphMap;

type ButtonType = {
  title: string;
  handleOnPress: () => void;
  leftIcon?: IoniconNames;
  rightIcon?: IoniconNames;
};

export const CustomButton = ({
  title,
  handleOnPress,
  leftIcon,
  rightIcon,
}: ButtonType) => {
  return (
    <Pressable style={styles.button} onPress={handleOnPress}>
      {leftIcon ? (
        <Ionicons name={leftIcon} size={24} color="black" />
      ) : (
        <View style={styles.emptyIcon} />
      )}
      <View>
        <ThemedText type="subtitle">{title}</ThemedText>
      </View>
      {rightIcon ? (
        <Ionicons name={rightIcon} size={24} color="black" />
      ) : (
        <View style={styles.emptyIcon} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "lightgreen",
    padding: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    width: "45%",
  },
  emptyIcon: {
    width: 24,
    height: 24,
  },
});
