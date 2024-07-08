import { useState } from "react";
import { View } from "react-native";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { useSpeech } from "./hooks/useSpeech";
import { ProgressBar } from "@/components/shared/ProgressBar";

type SpeechCreateStrongMessageProps =
  SpeechCreateRouteParams<"SpeechCreateStrongMessage">;

export const SpeechCreateStrongMessage: React.FC<
  SpeechCreateStrongMessageProps
> = ({ navigation, route }) => {
  const { update } = useSpeech();
  const [message, setMessage] = useState<string | undefined>(undefined);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={5} totalSteps={6} />
      <QuestionTemplate
        title="Je termine par un message fort"
        subtitle="Le message fort, c'est l'idée importante. Je dis ou redis le message fort à la fin pour que le public s'en souvienne."
        input1={{
          title: "Indique ici ton message fort",
          onChangeText: setMessage,
          value: message,
        }}
        onNext={async () => {
          await update(route.params.uuid, {
            answer: message || "",
            stepID: "strongMessage",
          });
          // navigate to summary of speech creation
        }}
        onBack={navigation.goBack}
      />
    </View>
  );
};
