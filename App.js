import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TabNavigation from "./components/TabNavigation";
import { Provider } from "react-redux";
import userStore from "./utils/user-store";

export default function App() {
  return (
    <Provider store={userStore}>
      <NavigationContainer>
        {/* ✉️ Need state management in status bar stlye */}
        <StatusBar style="dark" />
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}
