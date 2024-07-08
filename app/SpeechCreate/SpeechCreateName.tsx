import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";
import { useState } from "react";
import { useSpeech } from "./hooks/useSpeech";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateName">;

export const SpeechCreateName: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [age, setAge] = useState<string | undefined>(undefined);

  const { update } = useSpeech();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={2} totalSteps={6} />
      <QuestionTemplate
        onBack={navigation.goBack}
        title="Quel est mon prénom et mon age ?"
        example="Je m'appelle Thomas, j'ai 27 ans"
        input1={{
          title: "Je m appelle",
          onChangeText: setName,
          value: name,
        }}
        input2={{
          title: "Mon age",
          onChangeText: setAge,
          value: age,
        }}
        onNext={async () => {
          await update(route.params.uuid, {
            answer: name || "",
            stepID: "name",
          });
          await update(route.params.uuid, {
            answer: name || "",
            stepID: "age",
          });
          navigation.push("SpeechCreateProfession", {
            uuid: route.params.uuid,
            step: route.params.step + 1,
          });
        }}
      />
    </View>
  );
};
