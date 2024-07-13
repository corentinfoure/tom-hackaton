import { CustomButton } from "@/components/shared/CustomButton";
import { SpeechSummary } from "@/components/shared/SpeechSummary";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Speech, useSpeech } from "../SpeechCreate/hooks/useSpeech";
import { SpeechPrepsRouteParams } from "./SpeechPreps.navigator";

type SpeechDetailsProps = SpeechPrepsRouteParams<"details">;

export const SpeechDetails: React.FC<SpeechDetailsProps> = ({
  navigation,
  route,
}) => {
  const { uuid } = route.params;

  const { read, deleteSpeech } = useSpeech();

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
        <SpeechSummary speech={data} />
        <CustomButton
          style={{ marginTop: 32 }}
          title={"Retour à la liste des discours"}
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
        <CustomButton
          title={"Supprimer le discours"}
          handleOnPress={async () => {
            Alert.alert(
              "Supprimer le discours",
              "Êtes-vous sûr de vouloir supprimer ce discours ?",
              [
                {
                  text: "Annuler",
                  style: "cancel",
                },
                {
                  text: "Supprimer",
                  style: "destructive",
                  onPress: async () => {
                    await deleteSpeech(uuid);
                    navigation.reset({ routes: [{ name: "list" }] });
                  },
                },
              ]
            );
          }}
          variant="tertiary"
          style={{ marginTop: 16 }}
          rightIcon="trash-outline"
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
