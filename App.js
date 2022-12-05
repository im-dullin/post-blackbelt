import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import TabNavigation from "./components/navigation/TabNavigation";
import dateStore from "./utils/store";
import { theme } from "./theme";
import StackNavigation from "./components/navigation/StackNavigation";

export default function App() {
  return (
    <Provider store={dateStore}>
      <NavigationContainer>
        <StatusBar
          StatusBarStyle="light-content"
          backgroundColor={theme.purpleDark}
        />
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
