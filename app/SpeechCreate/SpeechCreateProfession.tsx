import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";
import { useSpeech } from "./hooks/useSpeech";
import { useState } from "react";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateProfession">;

export const SpeechCreateProfession: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  const { update } = useSpeech();
  const [occupations, setOccupations] = useState<string | undefined>(undefined);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={3} totalSteps={6} />
      <QuestionTemplate
        title="Ce que je fais dans la vie"
        example="Mes loisirs : sports, musique...\nMon travail : cuisinier, caissier..."
        input1={{
          title: "Mes occupations",
          onChangeText: setOccupations,
          value: occupations,
        }}
        onNext={async () => {
          await update(route.params.uuid, {
            answer: occupations || "",
            stepID: "occupations",
          });
          navigation.push("SpeechCreateChooseSubject", {
            step: route.params.step + 1,
            uuid: route.params.uuid,
          });
        }}
        onBack={navigation.goBack}
      />
    </View>
  );
};
