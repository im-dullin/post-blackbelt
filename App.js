import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TabNavigation from "./components/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* ✉️ Need state management in status bar stlye */}
      <StatusBar style="dark" />
      <TabNavigation />
    </NavigationContainer>
  );
}
