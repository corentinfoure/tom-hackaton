import { ProgressBar } from "@/components/shared/ProgressBar";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { useSpeech } from "./hooks/useSpeech";

type SpeechCreateTitleProps = SpeechCreateRouteParams<"SpeechCreateTitle">;

export const SpeechCreateTitle: React.FC<SpeechCreateTitleProps> = ({
  navigation,
  route,
}) => {
  const { create, update, clear, read } = useSpeech();
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [uuid, setUUID] = useState<string | undefined>(undefined);
  const { top, bottom } = useSafeAreaInsets();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      contentContainerStyle={{
        paddingHorizontal: 32,
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <ProgressBar currentStep={1} totalSteps={6} />
      <QuestionTemplate
        title="✍️ Je donne un titre"
        input1={{
          title: "J'indique le titre de ma prise parole",
          onChangeText: setTitle,
          value: title,
        }}
        onNext={async () => {
          // await clear();
          const updateWithUUID = async (uuid: string) => {
            await update(uuid, {
              answer: title || "",
              stepID: "title",
            });
            console.log({ data: await read() });

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
    </ScrollView>
  );
};
