import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { removeStorageData, STORAGE_KEY } from "../../utils/async-storage-fn";

export default function Header({ headerInfo }) {
  const { left } = headerInfo;
  const { right } = headerInfo;

  return (
    <View id="mypage-header" style={styles.header}>
      <TouchableOpacity style={styles.touchableArea} onPress={left.onPress}>
        <MaterialIcons
          name={left.icon}
          size={24}
          color={left.iconColor}
          // onPress={() => navigation.navigate(left.navigate)}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{headerInfo.title}</Text>
      <TouchableOpacity style={styles.touchableArea} onPress={right.onPress}>
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
