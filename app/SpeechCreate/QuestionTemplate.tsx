import { CustomButton } from "@/components/shared/CustomButton";
import { InputText } from "@/components/shared/InputText";
import { ThemedText } from "@/components/style/ThemedText";
import { useState } from "react";
import { View } from "react-native";
import { QuestionExample } from "./QuestionExample";
import { useNavigation } from "@react-navigation/native";

type QuestionTemplateProps = {
  id: string;
  title: string;
  example?: string;
  input1?: string;
  input2?: string;
  answer1?: string;
  answer2?: string;
  suggestions?: string[];
  onNext: () => void;
};

export const QuestionTemplate: React.FC<QuestionTemplateProps> = ({
  id,
  title,
  input1,
  input2,
  suggestions,
  example,
  answer1,
  answer2,
  onNext,
}) => {
  const [value1, setValue1] = useState<string | undefined>(answer1)
  const [value2, setValue2] = useState<string | undefined>(answer2)

  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
      <ThemedText type="title">{title}</ThemedText>
      {example && <QuestionExample text={example} style={{ marginTop: 10 }} />}
      {input1 &&<InputText title={input1} value={answer1} onChangeText={setValue1} largeInput />}
      {input2 &&<InputText title={input2} value={answer2} onChangeText={setValue2} largeInput />}
      <CustomButton title="Valider" handleOnPress={onNext} variant="primary" style={{marginVertical: 10,}}/>
      <CustomButton title="Je retourne à l'étape précédente" handleOnPress={navigation.goBack} variant="secondary" />
    </View>
  );
};
