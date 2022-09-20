import { View, Text, StyleSheet, Image } from "react-native";
import { theme } from "../theme";
import profileImg from "../assets/images/profile.png";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImg} source={profileImg} />
        <View style={{ alignContent: "center" }}>
          <Text style={styles.profileUserName}>Rafael Mendes</Text>
          <Text style={{ color: theme.grey }}>
            이번 달 00일 중 00일을 수련하셨습니다{" "}
          </Text>
        </View>
      </View>
      <View style={styles.calCategorayContainer}>
        {["가술 연습", "스파링 데이", "대회", "승급", "오픈매트"].map(
          (calCateory, index) => {
            return (
              <View key={index} style={styles.calCategoray}>
                <Image style={styles.calCategorayImg} source={profileImg} />
                <Text style={{ fontSize: 13, color: theme.grey }}>
                  {calCateory}
                </Text>
              </View>
            );
          }
        )}
      </View>
      <View style={styles.calenderContainer}>
        {/* ✉️ Implement calender in react-native */}
      </View>
      <View style={styles.diaryContainer}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  profileContainer: {
    flex: 0.9,
    flexDirection: "row",
    marginTop: 60,
    paddingHorizontal: 15,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileUserName: {
    color: theme.black,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  calCategorayContainer: {
    flex: 0.8,
    backgroundColor: theme.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  calCategoray: {
    width: 60,
    height: 60,
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  calCategorayImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 3,
  },
  calenderContainer: {
    flex: 5,
    backgroundColor: "orange",
  },
  diaryContainer: {
    flex: 2,
    backgroundColor: "black",
  },
});
