import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Explore } from "./app/explore";
import { Home } from "./app/home";

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="explore" component={Explore} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
