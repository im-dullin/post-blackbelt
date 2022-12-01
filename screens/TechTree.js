import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import TechProfile from "../components/user/TechProfile";
import { SCREEN_NAME } from "../constants/screen-constants";
import { TECH_CAT } from "../constants/tech-category-constants";

export default function TechTree({ navigation }) {
  return (
    <View style={styles.container}>
      <TechProfile />
      <View style={styles.techContainer}>
        {TECH_CAT.map((v, i) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(SCREEN_NAME.TECH_DETAIL, {
                  techTitle: v,
                })
              }
              key={i}
            >
              <Text style={styles.techTitle}>{v}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.black,
  },
  techContainer: {
    flex: 4,
    backgroundColor: theme.background,
    width: "90%",
    marginBottom: 30,
    borderRadius: 15,
    justifyContent: "space-around",
  },
  techTitle: {
    color: theme.black,
    fontSize: 32,
    fontWeight: "800",
    marginLeft: 30,
    borderColor: theme.white,
    textShadowColor: theme.grey,
    textShadowRadius: 1.5,
  },
});
