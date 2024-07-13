import { RouteParams } from "@/navigation/RouteParams";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { CreateIdea, CreateIdeaProps } from "./CreateIdea";
import { SpeechCreateChooseSubject } from "./SpeechCreateChooseSubject";
import { SpeechCreateContent } from "./SpeechCreateContent";
import { SpeechCreateName } from "./SpeechCreateName";
import { SpeechCreateProfession } from "./SpeechCreateProfession";
import { SpeechCreatePublic } from "./SpeechCreatePublic";
import { SpeechCreateStrongMessage } from "./SpeechCreateStrongMessage";
import { SpeechCreateTitle } from "./SpeechCreateTitle";
import { SpeechSummary } from "./SpeechSummary";

const Routes = {
  SpeechCreateContent: "SpeechCreateContent",
  SpeechCreateTitle: "SpeechCreateTitle",
  SpeechCreateName: "SpeechCreateName",
  SpeechCreateProfession: "SpeechCreateProfession",
  SpeechCreateChooseSubject: "SpeechCreateChooseSubject",
  SpeechCreatePublic: "SpeechCreatePublic",
  SpeechCreateStrongMessage: "SpeechCreateStrongMessage",
  SpeechCreateIdea: "SpeechCreateIdea",
  SpeechCreateSummary: "SpeechCreateSummary",
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
  [Routes.SpeechCreateIdea]: CreateIdeaProps;
  [Routes.SpeechCreateSummary]: UUIDUpdatable;
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
        headerShown: false,
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
      <Stack.Screen
        name="SpeechCreateIdea"
        component={CreateIdea}
        options={{
          title: "Créer une prise de parole",
        }}
      />
      <Stack.Screen
        name="SpeechCreateSummary"
        component={SpeechSummary}
        options={{
          title: "Créer une prise de parole",
        }}
      />
    </Stack.Navigator>
  );
};
