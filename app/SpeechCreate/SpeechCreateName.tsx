import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateName">;

export const SpeechCreateName: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
        <ProgressBar currentStep={2} totalSteps={6} />
      <QuestionTemplate
        id="1"
        answer1={undefined}
        title="Quel est mon prénom et mon age ?"
        example="Je m'appelle Thomas, j'ai 27 ans"
        input1="Je m'appelle"
        input2="Mon age"
        onNext={() => {
          navigation.push("SpeechCreateProfession", { step: route.params.step + 1 });
        }}
      />
    </View>
  );
};
