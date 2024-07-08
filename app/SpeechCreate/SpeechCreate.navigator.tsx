import { RouteParams } from "@/navigation/RouteParams";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { SpeechCreateContent } from "./SpeechCreateContent";
import { SpeechCreateName } from "./SpeechCreateName";
import { SpeechCreateProfession } from "./SpeechCreateProfession";
import { SpeechCreateChooseSubject } from "./SpeechCreateChooseSubject";
import { SpeechCreatePublic } from "./SpeechCreatePublic";
import { SpeechCreateTitle } from "./SpeechCreateTitle";
import { SpeechCreateStrongMessage } from "./SpeechCreateStrongMessage";

const Routes = {
  SpeechCreateContent: "SpeechCreateContent",
  SpeechCreateTitle: "SpeechCreateTitle",
  SpeechCreateName: "SpeechCreateName",
  SpeechCreateProfession: "SpeechCreateProfession",
  SpeechCreateChooseSubject: "SpeechCreateChooseSubject",
  SpeechCreatePublic: "SpeechCreatePublic",
  SpeechCreateStrongMessage: "SpeechCreateStrongMessage",
} as const;

type UUIDUpdatable = {
  uuid: string;
};

type SpeechCreateNavigatorParamsList = {
  [Routes.SpeechCreateTitle]: { step: number };
  [Routes.SpeechCreateContent]: { step: number } & UUIDUpdatable;
  [Routes.SpeechCreateName]: { step: number } & UUIDUpdatable;
  [Routes.SpeechCreateProfession]: { step: number } & UUIDUpdatable;
  [Routes.SpeechCreateChooseSubject]: { step: number } & UUIDUpdatable;
  [Routes.SpeechCreatePublic]: { step: number } & UUIDUpdatable;
  [Routes.SpeechCreateStrongMessage]: { step: number } & UUIDUpdatable;
};

type Routes = (typeof Routes)[keyof typeof Routes];

type SpeechCreateNavigationParams<R extends Routes> = StackNavigationProp<
  SpeechCreateNavigatorParamsList,
  R
>;

type SpeechCreateRouteProp<R extends Routes> = RouteProp<
  SpeechCreateNavigatorParamsList,
  R
>;

export type SpeechCreateRouteParams<R extends Routes> = RouteParams<
  SpeechCreateNavigationParams<R>,
  SpeechCreateRouteProp<R>
>;

const Stack = createStackNavigator<SpeechCreateNavigatorParamsList>();

export const SpeechCreateNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SpeechCreateTitle"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="SpeechCreateContent"
        component={SpeechCreateContent}
        options={{
          title: "Créer une prise de parole",
        }}
      />
      <Stack.Screen
        name="SpeechCreateTitle"
        component={SpeechCreateTitle}
        options={{
          title: "Créer une prise de parole",
        }}
        initialParams={{
          step: 0,
        }}
      />
      <Stack.Screen
        name="SpeechCreateName"
        component={SpeechCreateName}
        options={{
          title: "Créer une prise de parole",
        }}
      />
      <Stack.Screen
        name="SpeechCreateProfession"
        component={SpeechCreateProfession}
        options={{
          title: "Créer une prise de parole",
        }}
      />
      <Stack.Screen
        name="SpeechCreateChooseSubject"
        component={SpeechCreateChooseSubject}
        options={{
          title: "Créer une prise de parole",
        }}
      />
      <Stack.Screen
        name="SpeechCreatePublic"
        component={SpeechCreatePublic}
        options={{
          title: "Créer une prise de parole",
        }}
      />
      <Stack.Screen
        name="SpeechCreateStrongMessage"
        component={SpeechCreateStrongMessage}
        options={{
          title: "Créer une prise de parole",
        }}
      />
    </Stack.Navigator>
  );
};
