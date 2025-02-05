import { ProgressBar } from "@/components/shared/ProgressBar";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { useSpeech } from "./hooks/useSpeech";

type SpeechCreateStrongMessageProps =
  SpeechCreateRouteParams<"SpeechCreateStrongMessage">;

export const SpeechCreateStrongMessage: React.FC<
  SpeechCreateStrongMessageProps
> = ({ navigation, route }) => {
  const { update } = useSpeech();
  const [message, setMessage] = useState<string | undefined>(undefined);
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
      <ProgressBar currentStep={7} totalSteps={8} />
      <QuestionTemplate
        title="💪 Je termine par un message fort"
        subtitle="Le message fort, c'est l'idée importante. Je dis ou redis le message fort à la fin pour que le public s'en souvienne."
        input1={{
          title: "Indique ici ton message fort",
          onChangeText: setMessage,
          value: message,
        }}
        onNext={async () => {
          if (!message) {
            Alert.alert("Attention", "Veuillez renseigner un message fort");
            return;
          }
          await update(route.params.uuid, {
            answer: message || "",
            stepID: "strongMessage",
          });
          navigation.navigate("SpeechCreateSummary", {
            uuid: route.params.uuid,
          });
        }}
        onBack={navigation.goBack}
      />
    </ScrollView>
  );
};
