import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";
import {
  ContainerHalfWidth,
  ItemData,
} from "@/components/shared/ContainerHalfWidth";
import { useState } from "react";
import { useSpeech } from "./hooks/useSpeech";

type SpeechCreatePublic = SpeechCreateRouteParams<"SpeechCreatePublic">;

const sugestions: Omit<ItemData, "onPress">[] = [
  {
    label: "Des élèves",
    value: "Des élèves",
  },
  {
    label: "D'autres personnes avec une trisomie",
    value: "D'autres personnes avec une trisomie",
  },
  { label: "Des professionnels", value: "Des professionnels" },
  { label: "Des élus", value: "Des élus" },
];

export const SpeechCreatePublic: React.FC<SpeechCreatePublic> = ({
  navigation,
  route,
}) => {
  const [publicAudience, setPublicAudience] = useState<string | undefined>(
    undefined
  );
  const { update } = useSpeech();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={4} totalSteps={6} />
      <QuestionTemplate
        title="Je sélectionne mon sujet"
        input1={{
          title: "Précise ton sujet ici si il ne fait pas partis de la liste",
          onChangeText: setPublicAudience,
          value: publicAudience,
        }}
        suggestions={sugestions.map((item) => ({
          ...item,
          onPress: () => setPublicAudience(item.value),
        }))}
        onNext={async () => {
          await update(route.params.uuid, {
            answer: publicAudience || "",
            stepID: "publicAudience",
          });
          navigation.navigate("SpeechCreateContent", {
            step: route.params.step + 1,
            uuid: route.params.uuid,
          });
        }}
        onBack={navigation.goBack}
      />
    </View>
  );
};
