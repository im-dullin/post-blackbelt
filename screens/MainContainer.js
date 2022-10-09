import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Screens
import Home from "./Home";
import TechTree from "./TechTree";
import Mypage from "./Mypage";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";
import { createRef, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

//Screen names
export const homeName = "Home";
export const techTreeName = "Tech Tree";
export const myPageName = "My Page";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <>
      {/* <NavigationContainer> */}
      {/* Botton navigator */}
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let screen = route.name;
            // Matching screen and icon
            if (screen === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (screen === techTreeName) {
              iconName = focused ? "graph" : "graph-outline";
            } else if (screen === myPageName) {
              iconName = focused ? "account" : "account-outline";
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={40}
                color={theme.black}
              />
            );
          },
          tabBarActiveTintColor: theme.black,
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        {/* Stack screens instead of routing */}

        <Tab.Screen name={techTreeName} component={TechTree} />
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={myPageName} component={Mypage} />
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}
