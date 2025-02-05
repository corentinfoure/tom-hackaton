import { ProgressBar } from "@/components/shared/ProgressBar";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { useSpeech } from "./hooks/useSpeech";

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
      <ProgressBar currentStep={2} totalSteps={8} />
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
          if (!name) {
            Alert.alert("Attention", "Veuillez renseigner votre nom");
            return;
          }
          if (!age) {
            Alert.alert("Attention", "Veuillez renseigner votre age");
            return;
          }
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
