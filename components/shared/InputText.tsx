import { TextInput, StyleSheet, View } from "react-native";
import { ThemedText } from "../style/ThemedText";

type InputTextType = {
  value: string | undefined;
  title?: string;
  largeInput?: boolean;
  onChangeText: (value: string) => void;
};

export const InputText = ({
  value,
  title,
  largeInput,
  onChangeText,
}: InputTextType) => {
  return (
    <View>
      <ThemedText type="default">{title}</ThemedText>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Ecris ton texte ici..."
        placeholderTextColor={"grey"}
        multiline={largeInput}
        style={[styles.normalInput, largeInput && styles.largeInput]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  normalInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  largeInput: {
    height: 100,
    fontSize: 18,
  },
});
