import React, { useEffect, useState } from "react";

import { SpeechPrepsRouteParams } from "./SpeechPreps.navigator";
import { CustomButton } from "@/components/shared/CustomButton";
import { Speech, useSpeech } from "../SpeechCreate/hooks/useSpeech";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { ThemedText } from "@/components/style/ThemedText";
import { QuestionExample } from "../SpeechCreate/QuestionExample";
import { Idea } from "../SpeechCreate/CreateIdea";

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
        <ThemedText type="title">{data.title}</ThemedText>
        <Card
          title={"Ma présentation"}
          style={{ marginTop: 16 }}
          value={`Je m'appelle ${data.name} et j'ai ${data.age} ans.\nDans la vie je suis ${data.occupations}.`}
        />
        <Card
          title={"Je vais vous parler de"}
          value={`Mon sujet: ${data.subject}\nMon public: ${data.publicAudience}`}
          style={{ marginTop: 16 }}
        />
        <Card
          title={"Mes idées"}
          value={(JSON.parse(data.ideas) as Idea[])
            .map(
              (idea, index) =>
                `Idée #${index + 1}: ${idea.idea}\nExemple: ${idea.example}`
            )
            .join("\n\n")}
          style={{ marginTop: 16 }}
        />
        <Card
          title={"Mon idée forte"}
          value={data.strongMessage}
          style={{ marginTop: 16 }}
        />

        <QuestionExample
          titleExample="Conseil"
          style={{ marginTop: 16 }}
          text={`Je n'oublies pas de remercier mon audience pour finir mon discours.\n\nExemple : Merci de m'avoir écouté. J'espère que vous avez aimé entendre parler de mon sujet sur le travail.`}
        />

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
          handleOnPress={ async () => {
            Alert.alert("Supprimer le discours", "Êtes-vous sûr de vouloir supprimer ce discours ?", [
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
            ])
          }}
          variant="tertiary"
          style={{ marginTop: 16 }}
          rightIcon="trash-outline"
        />
      </ScrollView>
    )
  );
};

const Card: React.FC<{
  title: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}> = ({ title, value, style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: "#EFF7E1",
          padding: 16,
          borderRadius: 12,
          width: "100%",
        },
        style,
      ]}
    >
      <ThemedText style={{ marginBottom: 4 }} type="subtitle">
        {title}
      </ThemedText>
      <ThemedText type="default">{value}</ThemedText>
    </View>
  );
};
