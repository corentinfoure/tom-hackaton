import { TextInput, StyleSheet } from "react-native";

type InputTextType = {
  value: string | undefined;
  largeInput?: boolean;
  onChangeText: (value: string) => void;
};

export const InputText = ({
  value,
  largeInput,
  onChangeText,
}: InputTextType) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Ecris ton texte ici..."
      placeholderTextColor={"grey"}
      multiline={largeInput}
      style={[styles.normalInput, largeInput && styles.largeInput]}
    />
  );
};

const styles = StyleSheet.create({
  normalInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  largeInput: {
    height: 400,
    fontSize: 20,
  },
});
