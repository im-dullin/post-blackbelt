import { Text, View } from "react-native";
import dateStore from "../../utils/store";

export default function WriteDiary() {
  const selectedDate = dateStore.getState();

  console.log(selectedDate);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
