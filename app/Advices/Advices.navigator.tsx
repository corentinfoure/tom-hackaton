import { RouteParams } from "@/navigation/RouteParams";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { Summary } from "./Summary";

const Routes = {
  Summary: "summary",
} as const;

type AdvicesNavigatorParamsList = {
  [Routes.Summary]: undefined;
};

type Routes = (typeof Routes)[keyof typeof Routes];

type AdvicesNavigationParams<R extends Routes> = StackNavigationProp<
  AdvicesNavigatorParamsList,
  R
>;

type AdvicesRouteProp<R extends Routes> = RouteProp<
  AdvicesNavigatorParamsList,
  R
>;

export type AdvicesRouteParams<R extends Routes> = RouteParams<
  AdvicesNavigationParams<R>,
  AdvicesRouteProp<R>
>;

const Stack = createStackNavigator<AdvicesNavigatorParamsList>();

export const AdvicesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="summary"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="summary"
        component={Summary}
        options={{
          title: "Sommaire",
        }}
      />
    </Stack.Navigator>
  );
};
