import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";

export type Idea = {
  idea: string;
  example: string;
};

export type CreateIdeaProps = {
  onValidate: (idea: Idea) => void;
  onBack: () => void;
  idea?: Idea;
};

type CreateIdeaScreenProps = SpeechCreateRouteParams<"SpeechCreateIdea">;

export const CreateIdea: React.FC<CreateIdeaScreenProps> = ({ route }) => {
  const { onValidate, idea, onBack } = route.params;
  const [ideaContent, setIdeaContent] = useState<string>(idea?.idea ?? "");
  const [exampleContent, setExampleContent] = useState<string>(
    idea?.example ?? ""
  );
  const { top, bottom } = useSafeAreaInsets();
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingHorizontal: 24,
      }}
    >
      <QuestionTemplate
        input1={{
          onChangeText: setIdeaContent,
          title: "Quelle est mon idée",
          value: ideaContent,
        }}
        onBack={onBack}
        onNext={() => {
          if (!ideaContent || !exampleContent) {
            Alert.alert(
              "Attention",
              "Veuillez renseigner une idée et un exemple"
            );
            return;
          }
          onValidate({ idea: ideaContent, example: exampleContent });
        }}
        title="Ajouter une idée"
        subtitle="Pour chaque idée, je dois donner un exemple"
        input2={{
          onChangeText: setExampleContent,
          title: "Je donne un exemple",
          value: exampleContent,
        }}
        validateTitle="Valider l'idée"
        backTitle="Annuler mon idée"
      />
    </ScrollView>
  );
};
