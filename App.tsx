import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { LandingPage } from "./app/landingPage";
import { Home } from "./app/home";
import { RouteParams } from "./navigation/RouteParams";
import { EmotionsNavigator } from "./app/Emotions/Emotions.navigator";
import { SpeechPrepsNavigator } from "./app/SpeechPreps/SpeechPreps.navigator";
import { SpeechCreateNavigator } from "./app/SpeechCreate/SpeechCreate.navigator";
import { Splash } from "./components/navigation/Splash";

const Routes = {
  Landing: "landingPage",
  Home: "home",
  Advices: "advices",
  SpeechPreps: "speechPreps",
  SpeechCreate: "speechCreate",
  Splash: "splash",
} as const;

type RootNavigatorParamsList = {
  [Routes.Landing]: undefined;
  [Routes.Home]: undefined;
  [Routes.Advices]: undefined;
  [Routes.SpeechPreps]: undefined;
  [Routes.SpeechCreate]: undefined;
  [Routes.Splash]: undefined;
};

type Routes = (typeof Routes)[keyof typeof Routes];

type RootNavigationParams<R extends Routes> = StackNavigationProp<
  RootNavigatorParamsList,
  R
>;

type RootRouteProp<R extends Routes> = RouteProp<RootNavigatorParamsList, R>;

export type RootRouteParams<R extends Routes> = RouteParams<
  RootNavigationParams<R>,
  RootRouteProp<R>
>;

const Stack = createStackNavigator<RootNavigatorParamsList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="landingPage" component={LandingPage} />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={"splash"} component={Splash} />
          <Stack.Screen name={"advices"} component={EmotionsNavigator} />
          <Stack.Screen name={"speechPreps"} component={SpeechPrepsNavigator} />
          <Stack.Screen
            name={"speechCreate"}
            component={SpeechCreateNavigator}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
