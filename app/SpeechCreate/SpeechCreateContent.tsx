import { CustomButton } from "@/components/shared/CustomButton";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ThemedText } from "@/components/style/ThemedText";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Idea } from "./CreateIdea";
import { IdeaRow } from "./IdeaRow";
import { NewIdeaRow } from "./NewIdeaRow";
import { QuestionExample } from "./QuestionExample";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { useSpeech } from "./hooks/useSpeech";

type SpeechCreateProps = SpeechCreateRouteParams<"SpeechCreateContent">;

export const SpeechCreateContent: React.FC<SpeechCreateProps> = ({
  navigation,
  route,
}) => {
  const { update } = useSpeech();
  const [ideas, setIdeas] = useState<Idea[]>([]);
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
      <ProgressBar currentStep={6} totalSteps={8} />
      <ThemedText type="title">
        {"💬 Qu’est-ce que je veux leur dire"}
      </ThemedText>

      <QuestionExample
        text={
          "J'ai le droit de travailler comme tout le monde, je suis autonome, j'ai des capacités à accomplir une tâche..."
        }
        style={{ marginTop: 10 }}
      />
      <ThemedText type="subtitle" style={{ marginTop: 10 }}>
        {"Mes idées"}
      </ThemedText>
      {ideas.map((idea, index) => (
        <IdeaRow
          key={index}
          idea={idea}
          onPressDelete={() => {
            setIdeas(ideas.filter((i) => i.idea !== idea.idea));
          }}
          style={{ marginTop: 10 }}
          number={index + 1}
        />
      ))}
      <NewIdeaRow
        style={{ marginTop: 10 }}
        onPress={() => {
          navigation.navigate("SpeechCreateIdea", {
            onBack: navigation.goBack,
            onValidate: (idea: Idea) => {
              setIdeas([...ideas, idea]);
              navigation.goBack();
            },
          });
        }}
      />
      <CustomButton
        title={"Valider"}
        handleOnPress={async () => {
          if (ideas.length == 0) {
            Alert.alert("Attention", "Veuillez renseigner au moins une idée");
            return;
          }
          await update(route.params.uuid, {
            answer: JSON.stringify(ideas),
            stepID: "ideas",
          });
          navigation.navigate("SpeechCreateStrongMessage", {
            uuid: route.params.uuid,
            step: route.params.step + 1,
          });
        }}
        variant="primary"
        style={{ marginTop: 24, marginBottom: 12 }}
        rightIcon="chevron-forward-outline"
      />
      <CustomButton
        title={"Retour à l'étape précédente"}
        handleOnPress={navigation.goBack}
        variant="secondary"
        leftIcon="chevron-back-outline"
      />
    </ScrollView>
  );
};
