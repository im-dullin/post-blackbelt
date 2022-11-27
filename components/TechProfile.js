import { Image, StyleSheet, Text, View } from "react-native";
import profileImg from "../assets/images/profile.png";
import { theme } from "../theme";
export default function TechProfile({ navigation }) {
  const userName = "User";
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profileImg} source={profileImg} />
      <Text style={styles.title}>{userName}'s Technique Tree</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
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
