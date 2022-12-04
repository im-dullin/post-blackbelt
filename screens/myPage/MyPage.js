import { View, Text, StyleSheet, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

import { theme } from "../../theme";
import TechPieChart from "../../components/user/TechPieChart";

import { SCREEN_NAME } from "../../constants/screen-constants";
import profileImg from "../../assets/images/user.png";
import backgroundImg from "../../assets/images/userBackground2.jpg";
import { getStorageUser, isIncludeKey } from "../../utils/async-storage-fn";
import {
  defaultUser,
  PROMOTION_DATE,
  START_DATE,
} from "../../constants/user-inputs-constants";
import { dateDiffInDays, dateFormatter } from "../../utils/date-fn";
import Belt from "../../components/user/Belt";
import Header from "../../components/utils/Header";
import MyPageProfile from "../../components/user/MyPageProfile";
import MyPageGoals from "../../components/user/MyPageGoals";

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
    const asyncStorageUser = await getStorageUser();
    // console.log(asyncStorageUser);
    if (asyncStorageUser === null) {
      return setUser(defaultUser);
    }
    await setFormattedDate(asyncStorageUser);

    if (isIncludeKey(asyncStorageUser, START_DATE)) {
      const startDate = new Date(asyncStorageUser[START_DATE]);
      await setFormattedStartDate(startDate);
    }
    if (isIncludeKey(asyncStorageUser, PROMOTION_DATE)) {
      const promotionDate = asyncStorageUser[PROMOTION_DATE];
      await setFormattedpPromotionDate(promotionDate);
    }
  };

  return (
    <View style={styles.container}>
      <Header headerInfo={headerInfo} />
      <View id="mypage-background" style={styles.backgroundContainer}>
        <Image style={styles.backgroundImg} source={backgroundImg} />
        {/* <Image style={styles.backgroundImg} source={user[BACKGROUND_IMG]} /> */}
      </View>
      <View id="mypage-main" style={styles.mainContainer}>
        <Image
          id="mypage-profile-img"
          style={styles.profileImg}
          source={profileImg}
          // source={user[PROFILE_IMG]}
        />
        <View id="mypage-profile-container" style={styles.profileContainer}>
          <MyPageProfile user={user} />
          <View id="mypage-belt-container">
            <Belt user={user} />
          </View>
        </View>
        <View id="mypage-goals" style={inheritStyles.goalsSubContainer}>
          <MyPageGoals user={user} />
        </View>
        <View
          id="mypage-tech-piechart"
          style={inheritStyles.pieChartSubContainer}
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
});

const inheritStyles = StyleSheet.create({
  goalsSubContainer: {
    ...styles.subContainer,
    height: 90,
    justifyContent: "space-around",
  },

  pieChartSubContainer: {
    ...styles.subContainer,
    height: 230,
    marginTop: -15,
    justifyContent: "center",
  },
});
