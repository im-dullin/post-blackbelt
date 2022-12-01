import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { theme } from "../../theme";

// Wrap with SafeAreaView
export default function ValuePicker({
  pickerItem,
  selectedData,
  onValueChange,
}) {
  return (
    <Picker
      selectedValue={selectedData}
      style={styles.picker}
      itemStyle={styles.pickerItem}
      mode="dropdown"
      onValueChange={onValueChange}
    >
      <Picker.Item label="" value="" />
      {pickerItem.map((item) => {
        return <Picker.Item key={item} label={item} value={item} />;
      })}
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: 160,
    // postion: "absolute",
    fontSize: 14,
    height: 45,
    justifyContent: "center",
  },
  pickerItem: {
    height: 40,
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});
