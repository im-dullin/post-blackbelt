import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import profileImg from "../assets/images/profile.png";
import backgroundImg from "../assets/images/background.jpeg";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { myPageName } from "../App";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function MyPage({ navigation }) {
  // useEffect hook in react-native Tab navigator
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      return () => {
        // Do something when the screen is unfocused
      };
    }, [])
  );

  const belt = {
    color: theme.black,
    rankBar: theme.red,
    grau: 3,
  };
  const screenWidth = Dimensions.get("window").width;
  const data = [
    {
      name: "standing",
      diaryCount: 3,
      color: theme.standing,
      legendFontColor: theme.grey,
      legendFontSize: 15,
    },
    {
      name: "guard",
      diaryCount: 10,
      color: theme.guard,
      legendFontColor: theme.grey,
      legendFontSize: 15,
    },
    {
      name: "guard pass",
      diaryCount: 21,
      color: theme["guard pass"],
      legendFontColor: theme.grey,
      legendFontSize: 15,
    },
    {
      name: "after pass",
      diaryCount: 5,
      color: theme["after pass"],
      legendFontColor: theme.grey,
      legendFontSize: 15,
    },
  ];
  // const data = {
  //   labels: ["standing", "guard", "guard pass", "after pass", "competition"], // optional
  //   data: [0.4, 0.6, 0.8, 0.2, 0.5],
  // };
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(93,75,156, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.4,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={styles.container}>
      <View id="mypage-header" style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        <Text>{myPageName}</Text>
        <TouchableOpacity>
          <Ionicons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundContainer}>
        <Image style={styles.backgroundImg} source={backgroundImg} />
      </View>
      <View id="mypage-main" style={styles.mainContainer}>
        <Image style={styles.profileImg} source={profileImg} />
        <View id="mypage-profile" style={styles.profileContainer}>
          <Text style={styles.userName}>Rafael mendes</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 3,
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 8 }}>소속</Text>
            <Text>ART OF JIU JITSU</Text>
          </View>
          <View style={styles.userInfos}>
            <Text style={styles.userInfo}>주짓수를 2022.22.22 에 시작해서</Text>
            <Text style={styles.userInfo}>오늘 12345 일이 되었어요.</Text>
          </View>
          <View id="mypage-belt-container">
            <View
              style={{
                backgroundColor: belt.color,
                width: 250,
                height: 30,
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  backgroundColor: belt.rankBar,
                  width: 90,
                  height: 30,
                  marginEnd: 30,
                  flexDirection: "row",
                }}
              >
                {Array(belt.grau)
                  .fill(0)
                  .map((v, i) => {
                    return (
                      <View
                        key={i}
                        style={{
                          backgroundColor: theme.white,
                          width: 10,
                          height: 30,
                          marginLeft: 8,
                        }}
                      ></View>
                    );
                  })}
              </View>
            </View>
            <Text
              style={{
                fontSize: 11,
                position: "absolute",
                bottom: -17,
                right: 0,
                color: theme.grey,
              }}
            >
              최근 승급일 2000.00.00
            </Text>
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
          {/* Pie chart using React Native Chart Kit library*/}
          <PieChart
            data={data}
            width={screenWidth * 0.8}
            height={200}
            chartConfig={chartConfig}
            accessor={"diaryCount"}
            backgroundColor={"transparent"}
            paddingLeft={"5"}
            center={[5, 0]}
            absolute
          />
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
