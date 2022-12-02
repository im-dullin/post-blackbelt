import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { theme } from "../theme";
import DiaryBrief from "../components/diary/DiaryBrief";
import HomeProfile from "../components/user/HomeProfile";
import DiaryCalendar from "../components/diary/DiaryCalendar";
import AddDiaryBtn from "../components/diary/AddDiaryBtn";
import DiaryCategoryPicker from "../components/pickers/DiaryCategoryPicker";
import {
  createTable,
  db,
  deleteAllSQLData,
  deleteSQLDataById,
  fetchData,
  getData,
  getDiaryByDate,
  getDiaryById,
  getMonthlyDiarys,
  getSQLData,
  saveData,
  TB,
} from "../utils/sql-db";
import { getYearAndMonth } from "../utils/date-fn";

export default function Home({ navigation }) {
  const storeDate = useSelector((state) => state.selectedDate);
  const selectedMonth = getYearAndMonth(storeDate);

  useEffect(() => {
    createTable();
    // deleteSQLDataById(1);
    // deleteAllSQLData();
    // getSQLData(TB.ALL, handleGetSQLData);
    getMonthlyDiarys(selectedMonth);
    // getDiaryById(6);
    // createTable();
    // loadData();
  }, []);

  const handleGetSQLData = (tx, result) => {
    const resultArr = result.rows._array;
    console.log(resultArr);
  };

  const loadData = async () => {
    // const data = await getSQLData();
    // console.log(data);
    // return data;
  };

  return (
    <View style={styles.container}>
      <View id="profile" style={styles.profileContainer}>
        <HomeProfile />
      </View>
      <View id="categories" style={styles.diaryCategoryContainer}>
        <DiaryCategoryPicker isPicker={false} />
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
