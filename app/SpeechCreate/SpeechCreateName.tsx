import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { useSpeech } from "./hooks/useSpeech";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateName">;

export const SpeechCreateName: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [age, setAge] = useState<string | undefined>(undefined);

  const { update } = useSpeech();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <ProgressBar currentStep={2} totalSteps={6} />
      <QuestionTemplate
        onBack={navigation.goBack}
        title="🙂 Qui suis-je ?"
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
            answer: age || "",
            stepID: "age",
          });
          navigation.push("SpeechCreateProfession", {
            uuid: route.params.uuid,
            step: route.params.step + 1,
          });
        }}
      />
    </ScrollView>
  );
};
