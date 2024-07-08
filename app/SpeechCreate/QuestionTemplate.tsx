import { CustomButton } from "@/components/shared/CustomButton";
import { InputText } from "@/components/shared/InputText";
import { ThemedText } from "@/components/style/ThemedText";
import { useState } from "react";
import { View } from "react-native";
import { QuestionExample } from "./QuestionExample";
import { useNavigation } from "@react-navigation/native";
import { SpeechKey } from "./hooks/useSpeech";
import {
  ContainerHalfWidth,
  ItemData,
} from "@/components/shared/ContainerHalfWidth";

type InputProps = {
  title: string;
  value: string | undefined;
  onChangeText: (value: string) => void;
  placeholder?: string;
};

type QuestionTemplateProps = {
  title: string;
  subtitle?: string;
  example?: string;
  input1: InputProps;
  input2?: InputProps;
  suggestions?: ItemData[];
  onNext: () => void;
  onBack: () => void;
};

export const QuestionTemplate: React.FC<QuestionTemplateProps> = ({
  title,
  subtitle,
  input1,
  input2,
  suggestions,
  example,
  onNext,
  onBack,
}) => {
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
      <ThemedText type="title">{title}</ThemedText>
      {subtitle && (
        <ThemedText type="subtitle" style={{ marginTop: 10 }}>
          {subtitle}
        </ThemedText>
      )}
      {example && <QuestionExample text={example} style={{ marginTop: 10 }} />}
      {suggestions && suggestions.length > 0 && (
        <ContainerHalfWidth
          items={suggestions}
          spacing={8}
          style={{ marginTop: 10 }}
        />
      )}

      <InputText
        title={input1.title}
        value={input1.value}
        onChangeText={input1.onChangeText}
        placeholder={input1.placeholder}
        largeInput
        style={{ marginTop: 10 }}
      />

      {input2 && (
        <InputText
          style={{ marginTop: 10 }}
          title={input2.title}
          value={input2.value}
          onChangeText={input2.onChangeText}
          placeholder={input2.placeholder}
          largeInput
        />
      )}
      {/* <InputText value={answer} onChangeText={onChangeAnswer} largeInput /> */}
      <CustomButton
        title="Valider"
        handleOnPress={onNext}
        variant="primary"
        style={{ marginTop: 24, marginBottom: 12 }}
      />
      <CustomButton
        title="Retour a l'étape précédente"
        handleOnPress={onBack}
        variant="secondary"
      />
    </View>
  );
};
