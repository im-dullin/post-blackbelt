import { View, StyleSheet } from "react-native";

import { theme } from "../theme";
import DiaryBrief from "../components/diary/DiaryBrief";
import HomeProfile from "../components/user/HomeProfile";
import DiaryCategory from "../components/diary/DiaryCategory";
import DiaryCalendar from "../components/diary/DiaryCalendar";
import AddDiaryBtn from "../components/diary/AddDiaryBtn";

import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const storeDate = useSelector((state) => state.selectedDate);

  return (
    <View style={styles.container}>
      <View id="profile" style={styles.profileContainer}>
        <HomeProfile />
      </View>
      <View id="categories" style={styles.diaryCategoryContainer}>
        <DiaryCategory />
      </View>
      <View id="calendar" style={styles.calenderContainer}>
        <DiaryCalendar />
        <AddDiaryBtn navigation={navigation} />
      </View>
      <View id="selected-diary" style={styles.diaryContainer}>
        <DiaryBrief date={storeDate} />
      </View>
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
    marginTop: 50,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  diaryCategoryContainer: {
    flex: 0.85,
    backgroundColor: theme.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: theme.marginHorizontal,
    marginBottom: 10,
    borderRadius: 10,
  },
  calenderContainer: {
    flex: 7.5,
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    borderRadius: 10,
    // backgroundColor: "orange",
  },
  diaryContainer: {
    flex: 2.5,
  },
});
