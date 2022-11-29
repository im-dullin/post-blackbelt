import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import TechProfile from "../components/TechProfile";
import { SCREEN_NAME } from "../constants/screen-constants";

export default function TechTree({ navigation }) {
  const techs = ["STANDING", "GUARD", "GUARD PASS", "AFTER PASS"];
  return (
    <View style={styles.container}>
      <TechProfile />
      <View style={styles.techContainer}>
        {techs.map((v, i) => {
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
