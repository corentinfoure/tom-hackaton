import { useState } from "react";
import { View } from "react-native";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { useSpeech } from "./hooks/useSpeech";
import { ProgressBar } from "@/components/shared/ProgressBar";

type SpeechCreateTitleProps = SpeechCreateRouteParams<"SpeechCreateTitle">;

export const SpeechCreateTitle: React.FC<SpeechCreateTitleProps> = ({
  navigation,
  route,
}) => {
  const { create, update } = useSpeech();
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [uuid, setUUID] = useState<string | undefined>(undefined);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={1} totalSteps={6} />
      <QuestionTemplate
        title="De quoi je vais parler ?"
        input1={{
          title: "J'indique le titre de ma prise parole",
          onChangeText: setTitle,
          value: title,
        }}
        onNext={async () => {
          const updateWithUUID = async (uuid: string) => {
            await update(uuid, {
              answer: title || "",
              stepID: "title",
            });
            navigation.navigate("SpeechCreateName", {
              uuid: uuid,
              step: route.params.step + 1,
            });
          };
          if (!uuid) {
            const newUUID = await create();
            setUUID(newUUID);
            await updateWithUUID(newUUID);
          } else {
            await updateWithUUID(uuid);
          }
        }}
        onBack={navigation.goBack}
      />
    </View>
  );
};
