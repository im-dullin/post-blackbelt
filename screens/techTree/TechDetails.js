import { Button, Text, View } from "react-native";
import { techTreeName } from "../MainContainer";

export default function TechDetails({ navigation }) {
  return (
    <View>
      <Text>tech</Text>
      <Text>Details</Text>
      <Button
        title="go to Tec"
        onPress={() => navigation.navigate(techTreeName)}
      />
    </View>
  );
}
