import { CustomButton } from "@/components/shared/CustomButton";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ThemedText } from "@/components/style/ThemedText";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuestionExample } from "../SpeechCreate/QuestionExample";
import { EmotionsRouteParams } from "./Emotions.navigator";
import { FigureAndText } from "./FigureAndText";

type EmotionsProps = EmotionsRouteParams<"Month">;

export const MonthScreen: React.FC<EmotionsProps> = ({ navigation, route }) => {
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
      <ProgressBar currentStep={2} totalSteps={5} />
      <ThemedText type="title" style={{ paddingTop: 10 }}>
        📅 Un mois avant
      </ThemedText>
      <FigureAndText figure={1} text={"Je m'imagine avec mon public"} />
      <FigureAndText
        figure={2}
        text={"Je réfléchis à comment je veux organiser la salle."}
      />
      <FigureAndText
        figure={3}
        text={"Je décide où je veux être pendant mon intervention."}
      />

      <QuestionExample
        text={`je peux être :
    - Debout face à mon public
    - Assis sur une chaise à côté de mon public
    - Assis derrière une table`}
        titleExample={"Exemple"}
      />

      <CustomButton
        title="Suivant"
        rightIcon="chevron-forward-outline"
        handleOnPress={() => navigation.navigate("Week")}
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
