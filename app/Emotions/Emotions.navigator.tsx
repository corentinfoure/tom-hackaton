import { RouteParams } from "@/navigation/RouteParams";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { AdviceScreen } from "./AdviceScreen";
import { MonthScreen } from "./MonthScreen";
import { WeekScreen } from "./WeekScreen";
import { DayBeforeScreen } from "./DayBeforeScreen";
import { TodayScreen } from "./TodayScreen";

const Routes = {
  Advice: "Advice",
  Month: "Month",
  Week: "Week",
  DayBefore: "DayBefore",
  Today: "Today",
} as const;

type EmotionsNavigatorParamsList = {
  [Routes.Advice]: undefined;
  [Routes.Month]: undefined;
  [Routes.Week]: undefined;
  [Routes.DayBefore]: undefined;
  [Routes.Today]: undefined;
};

type Routes = (typeof Routes)[keyof typeof Routes];

type EmotionsNavigationParams<R extends Routes> = StackNavigationProp<
  EmotionsNavigatorParamsList,
  R
>;

type EmotionsRouteProp<R extends Routes> = RouteProp<
  EmotionsNavigatorParamsList,
  R
>;

export type EmotionsRouteParams<R extends Routes> = RouteParams<
  EmotionsNavigationParams<R>,
  EmotionsRouteProp<R>
>;

const Stack = createStackNavigator<EmotionsNavigatorParamsList>();

export const EmotionsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Advice"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Advice"
        component={AdviceScreen}
        options={{
          title: "Je gère mes émotions",
        }}
      />
      <Stack.Screen
        name="Month"
        component={MonthScreen}
        options={{
          title: "Je gère mes émotions",
        }}
      />
      <Stack.Screen
        name="Week"
        component={WeekScreen}
        options={{
          title: "Je gère mes émotions",
        }}
      />
      <Stack.Screen
        name="DayBefore"
        component={DayBeforeScreen}
        options={{
          title: "Je gère mes émotions",
        }}
      />
      <Stack.Screen
        name="Today"
        component={TodayScreen}
        options={{
          title: "Je gère mes émotions",
        }}
      />
    </Stack.Navigator>
  );
};
