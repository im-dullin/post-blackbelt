import { View, Text } from "react-native";
import { myPageName } from "./MainContainer";

export default function MyPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is {myPageName}</Text>
    </View>
  );
}
