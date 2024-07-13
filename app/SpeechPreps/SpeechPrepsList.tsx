import { ThemedText } from "@/components/style/ThemedText";
import { theme } from "@/components/style/colors";
import { useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Speech, useSpeech } from "../SpeechCreate/hooks/useSpeech";
import { SpeechPrepsRouteParams } from "./SpeechPreps.navigator";

export const SpeechPrepsList: React.FC<SpeechPrepsRouteParams<"list">> = ({
  navigation,
}) => {
  const { read } = useSpeech();
  const [speeches, setSpeeches] = useState<(Speech & { uuid: string })[]>([]);
  const { top, bottom } = useSafeAreaInsets();
  useEffect(() => {
    const fetch = async () => {
      const speeches = await read();

      setSpeeches(
        Object.keys(speeches).map((key) => ({
          ...speeches[key],
          uuid: key,
        }))
      );
    };
    fetch();
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        paddingBottom: bottom,
        paddingHorizontal: 24,
      }}
    >
      {speeches.map((speech) => (
        <SpeechPrepCard
          key={speech.uuid}
          speech={speech}
          onPress={() => {
            navigation.push("details", { uuid: speech.uuid });
          }}
        />
      ))}
    </ScrollView>
  );
};

const SpeechPrepCard: React.FC<{ speech: Speech; onPress: () => void }> = ({
  speech,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: "#006FFD",
        borderRadius: 12,
        backgroundColor: theme.homePage.background1,
      }}
    >
      <ThemedText type="subtitle">{`${speech.title}`}</ThemedText>
    </Pressable>
  );
};
