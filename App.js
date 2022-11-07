import TechDetails from "./screens/techTree/TechDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { homeName, myPageName, techTreeName, theme } from "./theme";
import TechTree from "./screens/TechTree";
import Home from "./screens/Home";
import MyPage from "./screens/Mypage";
import Login from "./screens/myPage/Login";

const HomeStack = createNativeStackNavigator();
const TechTreeStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* ✉️ Need state management in status bar stlye */}
      <StatusBar style="dark" />
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let screen = route.name;
            // Matching screen and icon
            if (screen === "HomeTab") {
              iconName = focused ? "home" : "home-outline";
            } else if (screen === "techTreeTab") {
              iconName = focused ? "graph" : "graph-outline";
            } else if (screen === "MyPageTab") {
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
              <MyPageStack.Screen name={myPageName} component={MyPage} />
              <MyPageStack.Screen name={"Login"} component={Login} />
            </MyPageStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   {/* use state management for switching dark/light mode */}
    //   <StatusBar style="dark" />
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     {/* Hidden Navigator */}
    //     <Stack.Screen name="MainContainer" component={MainContainer} />
    //     <Stack.Screen name="TechDetails" component={TechDetails} />
    //     {/* <Stack.Screen name="Settings" component={Settings} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
