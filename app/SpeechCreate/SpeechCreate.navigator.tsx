import { RouteParams } from "@/navigation/RouteParams";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { SpeechCreateContent } from "./SpeechCreateContent"
import { SpeechCreateName } from "./SpeechCreateName"
import { SpeechCreateProfession } from "./SpeechCreateProfession"
import { SpeechCreateChooseSubject } from "./SpeechCreateChooseSubject"

const Routes = {
  SpeechCreateContent: "SpeechCreateContent",
  SpeechCreateName: "SpeechCreateName",
  SpeechCreateProfession: "SpeechCreateProfession",
  SpeechCreateChooseSubject: "SpeechCreateChooseSubject",
} as const;

type SpeechCreateNavigatorParamsList = {
  [Routes.SpeechCreateContent]: { step: number };
  [Routes.SpeechCreateName]: { step: number };
  [Routes.SpeechCreateProfession]: { step: number };
  [Routes.SpeechCreateChooseSubject]: { step: number };
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
      initialRouteName="SpeechCreateContent"
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
    </Stack.Navigator>
  )
}
