import { View, Text, StyleSheet } from "react-native";
import { techTreeName } from "./MainContainer";

export default function TechTree({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is {techTreeName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
