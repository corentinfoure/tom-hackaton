import { RouteParams } from "@/navigation/RouteParams";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { SpeechCreate } from "./SpeechCreate";

const Routes = {
  Root: "root",
} as const;

type SpeechCreateNavigatorParamsList = {
  [Routes.Root]: undefined;
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
      initialRouteName="root"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="root"
        component={SpeechCreate}
        options={{
          title: "Créer une prise de parole",
        }}
      />
    </Stack.Navigator>
  );
};
