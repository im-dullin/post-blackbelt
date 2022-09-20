import { View, Text } from "react-native";
import { techTreeName } from "../MainContainer";

export default function MyPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is My Page</Text>
    </View>
  );
}
