import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
const HomeStack = createNativeStackNavigator();
const TechTreeStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();

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

        <Tab.Screen name="techTreeTab">
          {() => (
            <TechTreeStack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <TechTreeStack.Screen name={techTreeName} component={TechTree} />
              <TechTreeStack.Screen
                name="TechDetails"
                component={TechDetails}
              />
            </TechTreeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="HomeTab">
          {() => (
            <HomeStack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <HomeStack.Screen name={homeName} component={Home} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="MyPageTab">
          {() => (
            <MyPageStack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <MyPageStack.Screen name={myPageName} component={Mypage} />
            </MyPageStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}
