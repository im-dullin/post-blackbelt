import { theme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SCREEN_NAME } from "../../constants/screen-constants";

export default function TechHeader({ navigation }) {
  const { techTitle } = navigation.getState().routes[1].params;

  return (
    <TouchableOpacity
      style={styles.TitleContainer}
      onPress={() => navigation.navigate(SCREEN_NAME.TECH_TREE)}
    >
      <MaterialCommunityIcons
        name="chevron-left"
        size={50}
        color={theme[techTitle.toLowerCase()]}
        style={styles.backIcon}
      />
      <Text style={{ ...styles.title, color: theme[techTitle.toLowerCase()] }}>
        {techTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TitleContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    // textShadowColor: theme.purple,
    // textShadowRadius: 5,
  },
  backIcon: { position: "absolute", left: 10 },
});
