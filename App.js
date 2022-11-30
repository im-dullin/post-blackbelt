import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TabNavigation from "./components/utils/TabNavigation";
import dateStore from "./utils/store";

export default function App() {
  return (
    <Provider store={dateStore}>
      <NavigationContainer>
        {/* ✉️ Need state management in status bar stlye */}
        <StatusBar style="dark" />
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}
