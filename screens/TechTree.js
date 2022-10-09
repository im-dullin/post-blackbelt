import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import TechProfile from "../components/TechProfile";
import { Ionicons } from "@expo/vector-icons";
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
                navigation.navigate("TechDetails", {
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
    borderColor: theme.white,
    textShadowColor: theme.grey,
    textShadowRadius: 1.5,
  },
});
