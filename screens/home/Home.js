import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { theme } from "../../theme";
import DiaryBrief from "../../components/diary/DiaryBrief";
import HomeProfile from "../../components/user/HomeProfile";
import DiaryCalendar from "../../components/diary/DiaryCalendar";
import AddDiaryBtn from "../../components/diary/AddDiaryBtn";
import DiaryCategoryPicker from "../../components/pickers/DiaryCategoryPicker";
import { createTable } from "../../utils/sql-db";
import {
  daysInMonth,
  getFormattedToday,
  getYearMonthByDate,
} from "../../utils/date-fn";

export default function Home({ navigation }) {
  const storeDate = useSelector((state) => state.selectedDate);
  const [countDiary, setCountDiary] = useState(0);
  const [currYearMonth, setCurrYearMonth] = useState(
    getYearMonthByDate(getFormattedToday())
  );

  useEffect(() => {
    createTable();
    // deleteAllSQLData();
  }, []);

  return (
    <View style={styles.container}>
      <View id="profile" style={styles.profileContainer}>
        <HomeProfile
          daysInMonth={daysInMonth(currYearMonth)}
          countDiary={countDiary}
        />
      </View>
      {/* <View id="categories" style={styles.diaryCategoryContainer}>
        <DiaryCategoryPicker isPicker={false} />
      </View> */}
      <View id="calendar" style={styles.calenderContainer}>
        <DiaryCalendar
          setCountDiary={setCountDiary}
          setCurrYearMonth={setCurrYearMonth}
        />
        <AddDiaryBtn navigation={navigation} />
      </View>
      <View id="selected-diary" style={styles.diaryContainer}>
        <DiaryBrief date={storeDate} navigation={navigation} />
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
    flex: 1, // with diaryCategoryContainer: 0.9
    flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  diaryCategoryContainer: {
    flex: 0.85,
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    marginBottom: 10,
    borderRadius: 10,
  },
  calenderContainer: {
    flex: 7, // with diaryCategoryContainer: 7.5
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    borderRadius: 10,
    // backgroundColor: "orange",
  },
  diaryContainer: {
    flex: 2.8, // with diaryCategoryContainer: 2.5
    marginTop: 10,
  },
});
