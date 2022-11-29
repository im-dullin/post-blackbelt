import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { removeStorageData, STORAGE_KEY } from "../utils/async-storage-fn";

export default function Header({ headerInfo, navigation }) {
  const { left } = headerInfo;
  const { right } = headerInfo;
  const handleLeftOnPress = () => {
    const { navigate } = left.onPress;
    if (navigate) {
      return navigation.navigate(navigate);
    }
  };
  const handleRigthOnPress = () => {
    const { navigate } = right.onPress;
    if (navigate) {
      return navigation.navigate(navigate);
    }
    if (right.onPress?.msg === "deleteUser") {
      removeStorageData(STORAGE_KEY.USER); // test for delete userStorage
    }
  };
  return (
    <View id="mypage-header" style={styles.header}>
      <TouchableOpacity
        style={styles.touchableArea}
        onPress={handleLeftOnPress}
      >
        <MaterialIcons
          name={left.icon}
          size={24}
          color={left.iconColor}
          // onPress={() => navigation.navigate(left.navigate)}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{headerInfo.title}</Text>
      <TouchableOpacity
        style={styles.touchableArea}
        onPress={handleRigthOnPress}
      >
        <MaterialIcons
          name={right.icon}
          size={24}
          color={right.iconColor}
          // onPress={() => navigation.navigate(right.navigate)}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.6,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 13,
  },
  title: {
    fontSize: 16,
    paddingBottom: 10,
  },
  touchableArea: {
    padding: 10,
    paddingHorizontal: 30,
  },
});
