import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { homeName, myPageName, techTreeName, theme } from "../theme";
import TechTree from "../screens/TechTree";
import TechDetails from "../screens/techTree/TechDetails";
import Home from "../screens/Home";
import MyPage from "../screens/Mypage";
import Login from "../screens/myPage/Login";

const HomeStack = createNativeStackNavigator();
const TechTreeStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const TAB_NAME = {
  HOME: "HomeTab",
  TECH_TREE: "techTreeTab",
  MY_PAGE: "MyPageTab",
};
const NAV_ICON_MAP = {
  [TAB_NAME.HOME]: {
    [true]: "home",
    [false]: "home-outline",
  },
  [TAB_NAME.TECH_TREE]: {
    [true]: "graph",
    [false]: "graph-outline",
  },
  [TAB_NAME.MY_PAGE]: {
    [true]: "account",
    [false]: "account-outline",
  },
};

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={TAB_NAME.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let screen = route.name;
          let iconName = NAV_ICON_MAP[screen][focused];
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
      <Tab.Screen name={TAB_NAME.TECH_TREE}>
        {() => (
          <TechTreeStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <TechTreeStack.Screen name={techTreeName} component={TechTree} />
            <TechTreeStack.Screen name="TechDetails" component={TechDetails} />
          </TechTreeStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name={TAB_NAME.HOME}>
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
      <Tab.Screen name={TAB_NAME.MY_PAGE}>
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
  );
}
