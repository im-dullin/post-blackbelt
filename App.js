import MainContainer from "./screens/MainContainer";
import TechDetails from "./screens/techTree/TechDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // return <MainContainer />;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
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
