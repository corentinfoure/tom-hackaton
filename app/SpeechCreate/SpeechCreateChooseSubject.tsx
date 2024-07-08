import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";
import { ContainerHalfWidth } from "@/components/shared/ContainerHalfWidth";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateChooseSubject">;

const sugestions = [
    { label: "Travail", onPress: () => console.log("Travail selected") },
    { label: "Vie Quotidienne", onPress: () => console.log("Vie Quotidienne selected") },
    { label: "Santé", onPress: () => console.log("Santé selected") },
    { label: "Mes droits", onPress: () => console.log("Mes droits selected") },
]

export const SpeechCreateChooseSubject: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProgressBar currentStep={4} totalSteps={6} />
      <QuestionTemplate
        id="1"
        answer1={undefined}
        title="Je sélectionne mon sujet"
        input1="Précise ton sujet ici si il ne fait pas partis de la liste"
        // suggestions={<ContainerHalfWidth items={sugestions} spacing={0} />}
        onNext={() => {
        //   navigation.push("root", { step: route.params.step + 1 });
        }}
      />
    </View>
  );
};
