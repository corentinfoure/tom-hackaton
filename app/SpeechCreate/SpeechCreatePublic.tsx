import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { ScrollView, View } from "react-native";
import {
  ContainerHalfWidth,
  ItemData,
} from "@/components/shared/ContainerHalfWidth";
import { useState } from "react";
import { useSpeech } from "./hooks/useSpeech";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
      <ProgressBar currentStep={4} totalSteps={6} />
      <QuestionTemplate
        title="🤠 Qui est mon public"
        subtitle="Quand je sais à qui je m'adresse, je peux préparer mon discours en pensant à mon public."
        input1={{
          title: "Précise ton public ici s'il ne fait pas partis de la liste",
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
    </ScrollView>
  );
};
