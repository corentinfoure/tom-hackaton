import { CustomButton } from "@/components/shared/CustomButton";
import { InputText } from "@/components/shared/InputText";
import { ThemedText } from "@/components/style/ThemedText";
import { useState } from "react";
import { View } from "react-native";
import { QuestionExample } from "./QuestionExample";

type QuestionTemplateProps = {
  id: string;
  title: string;
  example: string;
  suggestions: string[];
  answer?: string;
  onNext: () => void;
};

export const QuestionTemplate: React.FC<QuestionTemplateProps> = ({
  id,
  title,
  suggestions,
  example,
  answer,
  onNext,
}) => {
  const [value, setValue] = useState<string | undefined>(answer);
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
      <ThemedText type="title">{title}</ThemedText>
      {example && <QuestionExample text={example} />}
      <InputText value={answer} onChangeText={setValue} largeInput />
      <CustomButton title="Valider" handleOnPress={onNext} />
    </View>
  );
};
