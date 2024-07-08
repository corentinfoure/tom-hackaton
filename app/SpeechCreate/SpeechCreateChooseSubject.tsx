import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";
import {
  ContainerHalfWidth,
  ItemData,
} from "@/components/shared/ContainerHalfWidth";
import { useState } from "react";
import { useSpeech } from "./hooks/useSpeech";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateChooseSubject">;

const sugestions: Omit<ItemData, "onPress">[] = [
  {
    label: "Travail",
    value: "Travail",
  },
  {
    label: "Vie Quotidienne",
    value: "Vie Quotidienne",
  },
  { label: "Santé", value: "Santé" },
  { label: "Mes droits", value: "Mes droits" },
];

export const SpeechCreateChooseSubject: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const { update } = useSpeech();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={4} totalSteps={6} />
      <QuestionTemplate
        title="Je sélectionne mon sujet"
        input1={{
          title: "Précise ton sujet ici si il ne fait pas partis de la liste",
          onChangeText: setSubject,
          value: subject,
        }}
        suggestions={sugestions.map((item) => ({
          ...item,
          onPress: () => setSubject(item.value),
        }))}
        onNext={async () => {
          await update(route.params.uuid, {
            answer: subject || "",
            stepID: "subject",
          });

          navigation.push("SpeechCreatePublic", {
            step: route.params.step + 1,
            uuid: route.params.uuid,
          });
        }}
        onBack={navigation.goBack}
      />
    </View>
  );
};
