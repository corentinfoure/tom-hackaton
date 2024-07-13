import {
  View,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../style/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { theme } from "../style/colors";

type IoniconNames = keyof typeof Ionicons.glyphMap;

type ButtonType = {
  variant: "primary" | "secondary" | "tertiary"
  title: string;
  handleOnPress: () => void;
  leftIcon?: IoniconNames;
  rightIcon?: IoniconNames;
  style?: StyleProp<ViewStyle>;
};

export const CustomButton = ({
  title,
  handleOnPress,
  leftIcon,
  rightIcon,
  variant,
  style,
}: ButtonType) => {
  return (
    <Pressable
      style={[styles[variant], styles.button, style]}
      onPress={handleOnPress}
    >
      {leftIcon ? (
        <Ionicons
          name={leftIcon}
          size={24}
          color={
            variant === "primary"
              ? styles.textPrimary.color
              : styles.textSecondary.color
          }
        />
      ) : (
        <View style={styles.emptyIcon} />
      )}
      <View>
        <ThemedText
          type="subtitle"
          style={[
            variant === "primary" ? styles.textPrimary : variant === 'secondary' ? styles.textSecondary : styles.textTertiary,
          ]}
        >
          {title}
        </ThemedText>
      </View>
      {rightIcon ? (
        <Ionicons
          name={rightIcon}
          size={24}
          color={
            variant === "primary"
              ? styles.textPrimary.color
              : variant === "secondary" ? styles.textSecondary.color
              : styles.textTertiary.color
          }
        />
      ) : (
        <View style={styles.emptyIcon} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    width: "100%",
  },
  primary: {
    backgroundColor: theme.button.primary.background,
    borderColor: theme.button.primary.border,
  },
  secondary: {
    backgroundColor: theme.button.secondary.background,
    borderColor: theme.button.secondary.border,
  },
  tertiary: {
    backgroundColor: theme.button.tertiary.background,
    borderColor: theme.button.tertiary.border,
  },
  emptyIcon: {
    width: 24,
    height: 24,
  },
  textPrimary: {
    color: theme.button.primary.text,
  },
  textSecondary: {
    color: theme.button.secondary.text,
  },
  textTertiary: {
    color: theme.button.tertiary.text,
  },
});
