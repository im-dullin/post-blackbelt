import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../../theme";
import TechTree from "../../screens/techTree/TechTree";
import TechDetail from "../../screens/techTree/TechDetail";
import Home from "../../screens/home/Home";
import MyPage from "../../screens/myPage/MyPage";
import Login from "../../screens/myPage/Login";
import {
  NAV_ICON_MAP,
  SCREEN_NAME,
  TAB_NAME,
} from "../../constants/screen-constants";
import EditMyPage from "../../screens/myPage/EditMyPage";
import EditDiary from "../../screens/home/EditDiary";
import ReadDiary from "../../screens/home/ReadDiary";
import Admin from "../../screens/myPage/Admin";

const HomeStack = createNativeStackNavigator();
const TechTreeStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      style={{ padding: 30 }}
      initialRouteName={TAB_NAME.HOME}
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
      {/* Stack screens instead of routing */}
      <Tab.Screen name={TAB_NAME.TECH_TREE}>
        {() => (
          <TechTreeStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <TechTreeStack.Screen
              name={SCREEN_NAME.TECH_TREE}
              component={TechTree}
            />
            <TechTreeStack.Screen
              name={SCREEN_NAME.TECH_DETAIL}
              component={TechDetail}
            />
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
            <HomeStack.Screen name={SCREEN_NAME.HOME} component={Home} />
            <HomeStack.Screen
              name={SCREEN_NAME.EDIT_DIARY}
              component={EditDiary}
            />
            <HomeStack.Screen
              name={SCREEN_NAME.READ_DIARY}
              component={ReadDiary}
            />
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
            <MyPageStack.Screen name={SCREEN_NAME.MY_PAGE} component={MyPage} />
            <MyPageStack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
            <MyPageStack.Screen
              name={SCREEN_NAME.EDIT_MY_PAGE}
              component={EditMyPage}
            />
            <MyPageStack.Screen name={SCREEN_NAME.ADMIN} component={Admin} />
          </MyPageStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
