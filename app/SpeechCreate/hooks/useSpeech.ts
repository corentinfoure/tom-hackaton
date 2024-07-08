import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

type UpdateSpeechAnswer = { answer: string; stepID: SpeechKey };

const storageKey = "speech";

export type SpeechKey =
  | "title"
  | "name"
  | "age"
  | "occupations"
  | "subject"
  | "publicAudience";

type Speech = Record<SpeechKey, string>;

const readData = async () => {
  const data = await AsyncStorage.getItem(storageKey);
  if (!data) {
    return {};
  }
  const speeches: Record<string, Speech> = JSON.parse(data);
  return speeches;
};

export const useSpeech = () => {
  const create = async () => {
    const uuid = uuidv4();
    await AsyncStorage.setItem(
      storageKey,
      JSON.stringify({ ...(await readData()), [uuid]: {} })
    );
    return uuid;
  };

  const update = async (id: string, answer: UpdateSpeechAnswer) => {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      const speeches: Record<string, Speech> = JSON.parse(data);
      const speechToUpdate = speeches[id];
      if (!speechToUpdate) {
        throw new Error("Speech not found");
      }

      const updatedSpeech = {
        ...speechToUpdate,
        [id]: answer,
      };

      await AsyncStorage.setItem(
        storageKey,
        JSON.stringify({ ...speeches, ...updatedSpeech })
      );
    }
  };

  const clear = async () => {
    await AsyncStorage.removeItem(storageKey);
  };

  return { create, update, read: readData, clear };
};
