import { CustomButton } from "@/components/shared/CustomButton";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { SpeechSummary as BaseSpeechSummary } from "@/components/shared/SpeechSummary";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SpeechCreateRouteParams } from "./SpeechCreate.navigator";
import { useSpeech, type Speech } from "./hooks/useSpeech";

type SpeechSummaryProps = SpeechCreateRouteParams<"SpeechCreateSummary">;

export const SpeechSummary: React.FC<SpeechSummaryProps> = ({
  route,
  navigation,
}) => {
  const { uuid } = route.params;

  const { read } = useSpeech();

  const [data, setData] = useState<Speech | undefined>(undefined);

  const { top, bottom } = useSafeAreaInsets();

  useEffect(() => {
    const fetch = async () => {
      const speeches = await read();
      const speech = speeches[uuid];

      setData(speech);
    };
    fetch();
  }, []);
  return (
    data && (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          {
            paddingTop: top,
            paddingBottom: bottom,
          },
          styles.scrollViewContainer,
        ]}
      >
        <ProgressBar currentStep={8} totalSteps={8} />
        <BaseSpeechSummary speech={data} />

        <CustomButton
          style={{ marginTop: 32 }}
          title={"Modifier ma présentation"}
          handleOnPress={navigation.goBack}
          variant="secondary"
          leftIcon="chevron-back-outline"
        />

        <CustomButton
          title={"Retourner a l'accueil"}
          handleOnPress={() => {
            navigation.reset({ routes: [{ name: "home" }] });
          }}
          variant="primary"
          style={{ marginTop: 16 }}
          rightIcon="checkmark-outline"
        />
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContainer: {
    paddingHorizontal: 24,
  },
});
