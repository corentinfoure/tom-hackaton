import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Explore } from "./app/explore"
import { Home } from "./app/home"
import { LandingPage } from './app/landingPage'
import { TabBarIcon } from "./components/navigation/TabBarIcon"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="home" screenOptions={
      {
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'lightblue',
        tabBarStyle: {
          backgroundColor: 'white',
          shadowOpacity: 0.1,
        },
        headerShown: false,
      }
    }>
      <Tab.Screen name="home" component={Home} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon name="home" color={focused ? 'blue' : 'lightblue'} size={size} />
          )
      }}
      />
      <Tab.Screen name="explore" component={Explore} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon name="search" color={focused ? 'blue' : 'lightblue'} size={size} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="landingPage">
        <Stack.Screen name="landingPage" component={LandingPage} />
        <Stack.Screen name="tabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
