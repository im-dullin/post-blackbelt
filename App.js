import MainContainer from "./screens/MainContainer";
import TechDetails from "./screens/techTree/TechDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const Stack = createNativeStackNavigator();
export default function App() {
  // return <MainContainer />;

  return (
    <NavigationContainer>
      {/* use state management for switching dark/light mode */}
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Hidden Navigator */}
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="TechDetails" component={TechDetails} />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
