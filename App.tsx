import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { LandingPage } from "./app/landingPage";
import { Home } from "./app/home"
import { RouteParams } from "./navigation/RouteParams";

const Routes = {
  Landing: "landingPage",
  Home: "home",
} as const;

type RootNavigatorParamsList = {
  [Routes.Landing]: undefined;
  [Routes.Home]: undefined;
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
      <Stack.Navigator initialRouteName="landingPage">
        <Stack.Screen name="landingPage" component={LandingPage} />
        <Stack.Screen name='home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
