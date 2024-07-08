import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateProfession">;

export const SpeechCreateProfession: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={3} totalSteps={6} />
      <QuestionTemplate
        id="1"
        answer1={undefined}
        title="Ce que je fais dans la vie"
        example="Mes loisirs : sports, musique...
        Mon travail : cuisinier, caissier..."
        input1="Mes occupations"
        onNext={() => {
          navigation.push("SpeechCreateChooseSubject", { step: route.params.step + 1 });
        }}
      />
    </View>
  );
};
