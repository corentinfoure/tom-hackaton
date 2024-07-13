import { CustomButton } from "@/components/shared/CustomButton";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ThemedText } from "@/components/style/ThemedText";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QuestionExample } from "../SpeechCreate/QuestionExample";
import { EmotionsRouteParams } from "./Emotions.navigator";
import { FigureAndText } from "./FigureAndText";

type EmotionsProps = EmotionsRouteParams<"Today">;

export const TodayScreen: React.FC<EmotionsProps> = ({ navigation, route }) => {
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
      <ProgressBar currentStep={5} totalSteps={5} />
      <ThemedText type="title">🎤 Le jour de mon intervention</ThemedText>
      <FigureAndText
        figure={1}
        text={
          "J’arrive au moins 30 minutes en avance pour préparer la salle et mon matériel."
        }
      />
      <FigureAndText
        figure={2}
        text={
          "Je prépare les tables et les chaises pour mon public et pour moi."
        }
      />
      <FigureAndText
        figure={3}
        text={"J’essaie mon matériel avant l’arrivée du public."}
      />
      <FigureAndText figure={4} text={"Je range mon matériel à côté de moi."} />
      <QuestionExample
        text={`- les post-it
    - les dessins
    - les documents...`}
        titleExample={"Exemple"}
      />

      <CustomButton
        title="Terminer"
        rightIcon="checkmark-sharp"
        handleOnPress={() => navigation.navigate("home")}
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
