import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateContent">;

export const SpeechCreateContent: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={1} totalSteps={6} />
      <QuestionTemplate
        id="1"
        answer1={undefined}
        title="De quoi je veux parler ?"
        input1="J’indique le titre de ma prise parole"
        onNext={() => {
          navigation.push("SpeechCreateName", { step: 0 });
        }}
      />
    </View>
  );
};
