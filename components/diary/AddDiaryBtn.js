import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { theme } from "../../theme";
import { SCREEN_NAME } from "../../constants/screen-constants";

export default function AddDiaryBtn({ navigation }) {
  const storeDate = useSelector((state) => state.selectedDate);

  const handleOnPress = () => {
    navigation.navigate(SCREEN_NAME.EDIT_DIARY, { date: storeDate });
  };
  return (
    <TouchableOpacity style={styles.btn} onPress={handleOnPress}>
      <MaterialCommunityIcons
        name="plus"
        size={30}
        color="black"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 10,
    borderRadius: 18,
    backgroundColor: theme.purpleLight,
    shadowColor: theme.purpleDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {},
});
