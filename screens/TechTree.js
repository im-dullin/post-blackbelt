import { View, Text, StyleSheet, Image, Button } from "react-native";
import { techTreeName } from "./MainContainer";
import profileImg from "../assets/images/profile.png";
import { theme } from "../theme";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TechDetails from "./techTree/TechDetails";

export default function TechTree({ navigation }) {
  const techs = ["STANDING", "GUARD", "GUARD PASS", "AFTER PASS"];
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.profileContainer}>
          <Image style={styles.profileImg} source={profileImg} />
          <Text style={styles.title}>Rafael's jiujitsu technique tree</Text>
        </View>
        <View style={styles.techContainer}>
          <Button
            title="go to TechDetail"
            onPress={() => navigation.navigate("TechDetails")}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: theme.black,
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  techContainer: {
    flex: 4,
    backgroundColor: theme.background,
    width: "90%",
    marginBottom: 30,
    borderRadius: 15,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 50,
  },
  title: {
    marginTop: 5,
    color: theme.white,
    fontSize: 18,
    fontWeight: "500",
  },
});
