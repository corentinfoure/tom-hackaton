import { useState } from "react";
import { View } from "react-native";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { useSpeech } from "./hooks/useSpeech";
import { ProgressBar } from "@/components/shared/ProgressBar";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateContent">;

export const SpeechCreateContent: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  const { create, update } = useSpeech();
  const [content, setContent] = useState<string[]>([]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={4} totalSteps={6} />

      {/* Create multi input UI here */}
    </View>
  );
};
