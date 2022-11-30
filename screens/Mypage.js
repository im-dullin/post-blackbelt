import { View, Text, StyleSheet, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

import { theme } from "../theme";
import TechPieChart from "../components/TechPieChart";

import { SCREEN_NAME } from "../constants/screen-constants";

import { getStorageUser } from "../utils/async-storage-fn";
import {
  BACKGROUND_IMG,
  BELT_COLOR,
  BELT_GRAU,
  defaultUser,
  MONTHLY_GOAL,
  NAME,
  PROFILE_IMG,
  PROMOTION_DATE,
  START_DATE,
  TEAM,
  YEARLY_GOAL,
} from "../constants/inputs-constants";
import { dateDiffInDays, dateFormatter } from "../utils/date-fn";
import Belt from "../components/Belt";
import Header from "../components/Header";

export default function MyPage({ navigation }) {
  const [user, setUser] = useState(defaultUser);
  const handleNavigateEditMyPage = () => {
    navigation.navigate(SCREEN_NAME.EDIT_MY_PAGE);
  };
  const handleRightOnPress = () => {
    // navigation.navigate(SCREEN_NAME.EDIT_MY_PAGE);
  };
  const headerInfo = {
    left: {
      icon: "edit",
      iconColor: "black",
      onPress: handleNavigateEditMyPage,
    },
    title: SCREEN_NAME.MY_PAGE,
    right: {
      icon: "settings",
      iconColor: "white",
      onPress: handleRightOnPress,
    },
  };
  useFocusEffect(
    useCallback(() => {
      loadUser();
      return () => {};
    }, [])
  );

  const isInclude = (userObject, key) => {
    return Object.keys(userObject).includes(key);
  };

  const setFormattedStartDate = async (startDate) => {
    const today = new Date();
    const DDay = dateDiffInDays(today, startDate);
    const updateUser = {
      [START_DATE]: dateFormatter(startDate),
      DDay,
    };
    await setFormattedDate(updateUser);
  };
  const setFormattedpPromotionDate = async (promotionDate) => {
    const updateUser = {
      [PROMOTION_DATE]: dateFormatter(promotionDate),
    };
    await setFormattedDate(updateUser);
  };

  const setFormattedDate = async (updateUser) => {
    setUser((prevUser) => {
      return { ...prevUser, ...updateUser };
    });
  };
  const loadUser = async () => {
    const storedUser = await getStorageUser();
    if (storedUser === null) {
      return setUser(defaultUser);
    }
    await setFormattedDate(storedUser);

    if (isInclude(storedUser, START_DATE)) {
      const startDate = new Date(storedUser[START_DATE]);
      await setFormattedStartDate(startDate);
    }
    if (isInclude(storedUser, PROMOTION_DATE)) {
      const promotionDate = storedUser[PROMOTION_DATE];
      await setFormattedpPromotionDate(promotionDate);
    }
  };

  return (
    <View style={styles.container}>
      <Header headerInfo={headerInfo} />
      <View style={styles.backgroundContainer}>
        <Image style={styles.backgroundImg} source={user[BACKGROUND_IMG]} />
      </View>
      <View id="mypage-main" style={styles.mainContainer}>
        <Image style={styles.profileImg} source={user[PROFILE_IMG]} />
        <View id="mypage-profile" style={styles.profileContainer}>
          <Text style={styles.userName}>{user[NAME]}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 3,
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 8 }}>소속</Text>
            <Text>{user[TEAM]}</Text>
          </View>
          <View style={styles.userInfos}>
            <Text style={styles.userInfo}>
              주짓수를 {user[START_DATE]} 에 시작해서
            </Text>
            <Text style={styles.userInfo}>오늘 {user.DDay} 일이 되었어요.</Text>
          </View>
          <View id="mypage-belt-container">
            <Belt
              beltColor={user[BELT_COLOR]}
              beltGrau={user[BELT_GRAU]}
              promotionDate={user[PROMOTION_DATE]}
            />
          </View>
        </View>
        <View id="mypage-goals" style={{ ...styles.subContainer, height: 90 }}>
          <>
            <View style={styles.goal}>
              <Text>올해의 목표</Text>
              <Text>{user[YEARLY_GOAL]}</Text>
            </View>
            <View style={styles.goal}>
              <Text>이 달의 목표</Text>
              <Text>{user[MONTHLY_GOAL]}</Text>
            </View>
          </>
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
  loading: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingBtn: {
    padding: 20,
    backgroundColor: theme.skyBlue,
    fontSize: 16,
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
  goal: {
    alignItems: "center",
  },
});
