import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { Alert, ScrollView, View } from "react-native";
import { useSpeech } from "./hooks/useSpeech";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateProfession">;

export const SpeechCreateProfession: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  const { update } = useSpeech();
  const [occupations, setOccupations] = useState<string | undefined>(undefined);
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
      <ProgressBar currentStep={3} totalSteps={8} />
      <QuestionTemplate
        title="💼 Ce que je fais dans la vie"
        example={`Mes loisirs : sports, musique...\nMon travail : cuisinier, caissier...`}
        input1={{
          title: "Mes occupations",
          onChangeText: setOccupations,
          value: occupations,
        }}
        onNext={async () => {
          if (!occupations) {
            Alert.alert("Attention", "Veuillez renseigner vos occupations");
            return;
          }
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
    </ScrollView>
  );
};
