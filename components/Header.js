import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { SCREEN_NAME } from "../constants/names";

export default function Header({ headerInfo, navigation }) {
  const { left } = headerInfo;
  const { right } = headerInfo;
  return (
    <View id="mypage-header" style={styles.header}>
      <TouchableOpacity>
        <MaterialIcons
          name={left.icon}
          size={24}
          color={left.iconColor}
          onPress={() => navigation.navigate(left.navigate)}
        />
      </TouchableOpacity>
      <Text>{headerInfo.title}</Text>
      <TouchableOpacity>
        <MaterialIcons
          name={right.icon}
          size={24}
          color={right.iconColor}
          onPress={() => navigation.navigate(right.navigate)}
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
});
