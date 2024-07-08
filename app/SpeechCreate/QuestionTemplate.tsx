import { CustomButton } from "@/components/shared/CustomButton";
import { InputText } from "@/components/shared/InputText";
import { ThemedText } from "@/components/style/ThemedText";
import { useState } from "react";
import { View } from "react-native";

type QuestionTemplateProps = {
  id: string;
  title: string;
  examples: string[];
  suggestions: string[];
  answer?: string;
  onNext: () => void;
};

export const QuestionTemplate: React.FC<QuestionTemplateProps> = ({
  id,
  title,
  suggestions,
  examples,
  answer,
  onNext,
}) => {
  const [value, setValue] = useState<string | undefined>(answer);
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
      <ThemedText type="title">{title}</ThemedText>
      {examples.length > 0 && (
        <View style={{ paddingLeft: 20 }}>
          {examples.map((example, index) => (
            <ThemedText key={index} type="default">
              {`• ` + example}
            </ThemedText>
          ))}
        </View>
      )}
      <InputText value={answer} onChangeText={setValue} largeInput />
      <CustomButton title="Valider" handleOnPress={onNext} />
    </View>
  );
};
