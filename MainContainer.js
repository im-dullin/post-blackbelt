import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import Home from "./screens/Home";
import TechTree from "./screens/TechTree";
import Mypage from "./screens/Mypage";
import { StyleSheet } from "react-native";

//Screen names
const homeName = "Home";
const techTreeName = "techTree";
const myPageName = "myPage";

const Tab = createBottomTabNavigator();
//

export default function MainContainer() {
  return (
    <NavigationContainer>
      {/* Botton navigator */}
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === techTreeName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === myPageName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* Stack screens instead of routing */}
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={techTreeName} component={TechTree} />
        <Tab.Screen name={myPageName} component={Mypage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
