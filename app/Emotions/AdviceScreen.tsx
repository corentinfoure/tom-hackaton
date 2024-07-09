import React from "react";
import { EmotionsRouteParams } from "./Emotions.navigator";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionTemplate } from "../SpeechCreate/QuestionTemplate";
import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type EmotionsProps = EmotionsRouteParams<'Advice'>;

export const AdviceScreen: React.FC<EmotionsProps> = ({ navigation, route }) => {

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
      <ProgressBar currentStep={1} totalSteps={5} />
      <QuestionTemplate
        onBack={navigation.goBack}
        title="🚧 Je prépare mon espace et mon matériel"
        subtitle="Cette partie va m’aider à bien préparer tout ce qu’il me faut pour mon
        intervention.
        Si je prépare bien mon espace et mon matériel, je serai plus à l’aise
        pendant ma prise de parole."
        example="Si je peux je vais voir la salle avant.
        Pour préparer la salle, j’ai besoin de savoir qui est mon public.
        Je dois aussi savoir combien de personnes vont participer à
        mon intervention."
        titleExample="Conseil"
        onNext={() => navigation.navigate('Month')}
      />
    </ScrollView>
  )
};
