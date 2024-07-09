import { useState } from "react";
import { QuestionTemplate } from "./QuestionTemplate";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { View } from "react-native";

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

  return (
    <View style={{ backgroundColor: "white" }}>
      <QuestionTemplate
        input1={{
          onChangeText: setIdeaContent,
          title: "Quelle est mon idée",
          value: ideaContent,
        }}
        onBack={onBack}
        onNext={() =>
          onValidate({ idea: ideaContent, example: exampleContent })
        }
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
    </View>
  );
};
