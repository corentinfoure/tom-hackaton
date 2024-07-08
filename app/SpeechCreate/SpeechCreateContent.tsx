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
  const [answer, setAnswer] = useState<string | undefined>(undefined);
  const [uuid, setUUID] = useState<string | undefined>(undefined);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={1} totalSteps={6} />
      <QuestionTemplate
        answer1={undefined}
        title="De quoi je veux parler ?"
        input1="J'indique le titre de ma prise parole"
        onNext={() => {
          navigation.push("SpeechCreateName", { step: 0 });
        id="name"
        answer={answer}

        // example={"example 1"}
        // suggestions={[]}
        // onNext={async () => {
        //   const updateWithUUID = async (uuid: string) => {
        //     await update(uuid, {
        //       answer: answer || "",
        //       stepID: "name",
        //     });
        //   };
        //   if (!uuid) {
        //     const newUUID = await create();
        //     setUUID(newUUID);
        //     await updateWithUUID(newUUID);
        //   } else {
        //     await updateWithUUID(uuid);
        //   }
        // }}
        // onChangeAnswer={setAnswer}
      />
    </View>
  );
};
