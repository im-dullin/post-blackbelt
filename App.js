import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import TabNavigation from "./components/utils/TabNavigation";
import dateStore from "./utils/store";
import { theme } from "./theme";

export default function App() {
  return (
    <Provider store={dateStore}>
      <NavigationContainer>
        <StatusBar
          StatusBarStyle="light-content"
          backgroundColor={theme.purpleDark}
        />
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}
