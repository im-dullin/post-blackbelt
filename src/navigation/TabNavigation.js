import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import TechTree from "../screens/techTree/TechTree";
import Home from "../screens/home/Home";
import MyPage from "../screens/myPage/MyPage";
import { NAV_ICON_MAP, SCREEN_NAME } from "../constants/screen-constants";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      style={{ padding: 30 }}
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const screen = route.name;
          const iconName = NAV_ICON_MAP[screen][focused];
          return <Ionicons name={iconName} size={30} color={theme.black} />;
        },

        tabBarStyle: { height: 70 },
        tabBarActiveTintColor: theme.black,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name={SCREEN_NAME.TECH_TREE} component={TechTree} />
      <Tab.Screen name={SCREEN_NAME.HOME} component={Home} />
      <Tab.Screen name={SCREEN_NAME.MY_PAGE} component={MyPage} />
    </Tab.Navigator>
  );
}
