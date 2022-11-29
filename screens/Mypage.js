import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import profileImg from "../assets/images/user.png";
import backgroundImg from "../assets/images/userBackground.jpg";
import { theme } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import TechPieChart from "../components/TechPieChart";
import Belt from "../components/Belt";
import userStore from "../utils/user-store";
import { SCREEN_NAME } from "../constants/screen-constants";
import Header from "../components/Header";

const headerInfo = {
  left: {
    icon: "edit",
    iconColor: "black",
    navigate: SCREEN_NAME.EDIT_MY_PAGE,
  },
  title: SCREEN_NAME.MY_PAGE,
  right: {
    icon: "settings",
    iconColor: "white",
    // navigate: SCREEN_NAME.LOGIN,
    navigate: SCREEN_NAME.MY_PAGE,
  },
};

export default function MyPage({ navigation }) {
  const user = userStore.getState();

  return (
    <View style={styles.container}>
      <Header headerInfo={headerInfo} navigation={navigation} />
      <View style={styles.backgroundContainer}>
        <Image style={styles.backgroundImg} source={user.background} />
      </View>
      <View id="mypage-main" style={styles.mainContainer}>
        <Image style={styles.profileImg} source={user.profile} />
        <View id="mypage-profile" style={styles.profileContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 3,
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 8 }}>소속</Text>
            <Text>{user.team}</Text>
          </View>
          <View style={styles.userInfos}>
            <Text style={styles.userInfo}>
              주짓수를 {user.startDate} 에 시작해서
            </Text>
            <Text style={styles.userInfo}>오늘 {user.DDay} 일이 되었어요.</Text>
          </View>
          <View id="mypage-belt-container">
            <Belt />
          </View>
        </View>
        <View id="mypage-goals" style={{ ...styles.subContainer, height: 90 }}>
          <View>
            <Text>올해의 목표</Text>
          </View>
          <View>
            <Text>이 달의 목표</Text>
          </View>
        </View>
        <View
          id="mypage-techs"
          style={{ ...styles.subContainer, height: 230, marginTop: -15 }}
        >
          <Text>나의 기술 분포도</Text>
          <TechPieChart />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.6,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 13,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  mainContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "space-around",
  },
  subContainer: {
    backgroundColor: theme.white,
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
  profileImg: {
    position: "absolute",
    top: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileContainer: {
    alignItems: "center",
  },
  userName: {
    marginTop: 45,
    fontSize: 22,
    fontWeight: "500",
  },
  userInfos: {
    alignItems: "center",
    marginVertical: 6,
  },
  userInfo: {
    color: theme.grey,
    fontSize: 11.5,
  },
});
