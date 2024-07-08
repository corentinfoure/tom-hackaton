import { RouteParams } from "@/navigation/RouteParams";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { SpeechPrepsList } from "./SpeechPrepsList";

const Routes = {
  List: "list",
} as const;

type SpeechPrepsNavigatorParamsList = {
  [Routes.List]: undefined;
};

type Routes = (typeof Routes)[keyof typeof Routes];

type SpeechPrepsNavigationParams<R extends Routes> = StackNavigationProp<
  SpeechPrepsNavigatorParamsList,
  R
>;

type SpeechPrepsRouteProp<R extends Routes> = RouteProp<
  SpeechPrepsNavigatorParamsList,
  R
>;

export type SpeechPrepsRouteParams<R extends Routes> = RouteParams<
  SpeechPrepsNavigationParams<R>,
  SpeechPrepsRouteProp<R>
>;

const Stack = createStackNavigator<SpeechPrepsNavigatorParamsList>();

export const SpeechPrepsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="list"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="list"
        component={SpeechPrepsList}
        options={{
          title: "Mes prises de parole",
        }}
      />
    </Stack.Navigator>
  );
};
