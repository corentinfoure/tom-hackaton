import { CustomButton } from "@/components/shared/CustomButton";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ThemedText } from "@/components/style/ThemedText";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuestionExample } from "../SpeechCreate/QuestionExample";
import { EmotionsRouteParams } from "./Emotions.navigator";
import { FigureAndText } from "./FigureAndText";

type EmotionsProps = EmotionsRouteParams<"Week">;

export const WeekScreen: React.FC<EmotionsProps> = ({ navigation, route }) => {
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
      <ProgressBar currentStep={3} totalSteps={5} />
      <ThemedText type="title">
        📅 Une semaine avant ma prise de parole
      </ThemedText>

      <FigureAndText figure={1} text={"Je m'imagine avec mon public"} />
      <FigureAndText
        figure={2}
        text={"Je réfléchis à comment je veux organiser la salle."}
      />

      <QuestionExample
        text={`J'ai besoin d'un ordinateur`}
        titleExample={"Exemple"}
      />

      <CustomButton
        title="Suivant"
        rightIcon="chevron-forward-outline"
        handleOnPress={() => navigation.navigate("DayBefore")}
        variant="primary"
        style={{ marginTop: 24, marginBottom: 12 }}
      />
      <CustomButton
        title="Précédent"
        leftIcon="chevron-back-outline"
        handleOnPress={navigation.goBack}
        variant="secondary"
      />
    </ScrollView>
  );
};
