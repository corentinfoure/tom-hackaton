import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";

type SpeechCreateProps = SpeechCreateRouteParams<"root">;

export const SpeechCreate: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <QuestionTemplate
        id="1"
        answer={undefined}
        title="Qui je suis"
        examples={["example 1", "example 2"]}
        suggestions={[]}
        onNext={() => {
          navigation.push("root", { step: route.params.step + 1 });
        }}
      />
    </View>
  );
};
