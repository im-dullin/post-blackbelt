import { Text, View } from "react-native";

import { useSelector } from "react-redux";
export default function WriteDiary() {
  const storeDate = useSelector((state) => state.selectedDate);

  console.log(storeDate);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
