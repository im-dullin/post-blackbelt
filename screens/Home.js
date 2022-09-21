import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { Calendar } from "react-native-calendars";
import profileImg from "../assets/images/profile.png";
import moment from "moment";

const daily = {
  diary_day: "2022-09-20",
  diary_title: "웨이터스윕, 오모플라타 스파링데이",
  diary_time: "19:30 - 20:30",
  diary_content:
    "오늘은 이런저런 연습을 했다... 이거는 이렇게 하는거구나 깨달았다. 웨이터스윕은 .. 베림보로는 ...",
  diary_cal_cat: [
    {
      name: "기술연습",
    },
    {
      name: "스파링",
    },
  ],
  techtag: [
    {
      category1: "standing",
      category2: "take down",
      category3: "",
      tech_title: "싱글렉 테이크 다운",
    },
    {
      category1: "guard",
      category2: "deep half guard",
      category3: "sweep",
      tech_title: "웨이터스윕",
    },
    {
      category1: "guard",
      category2: "open guard",
      category3: "sweep",
      tech_title: "오픈가드 벡테이크",
    },
  ],
};

const _format = "YYYY-MM-DD";
const _today = moment().format(_format);
const markedDays = {
  [_today]: {
    today: true,
    marked: true,
  },
  "2022-09-20": {
    // marked: false,
    selcted: true,
    selectedColor: "blue",
    dotColor: "red",
  },
  "2022-09-21": { marked: true },
  "2022-09-24": { marked: true },
};

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
                <Text style={{ fontSize: 11, color: theme.grey }}>
                  {calCateory}
                </Text>
              </View>
            );
          }
        )}
      </View>
      <View style={styles.calenderContainer}>
        {/* ✉️ react-native-calendars module: https://github.com/wix/react-native-calendars */}
        <Calendar
          style={styles.calendar}
          initialDate={"2022-09-01"}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            monthTextColor: theme.purpleDark,
            arrowColor: theme.purpleDark,
            textMonthFontSize: 20,
            textMonthFontWeight: "400",
            // selectedDayBackgroundColor: "#57B9BB",
            // selectedDayTextColor: "white",
          }}
          minDate={"2000-01-01"}
          maxDate={"2030-05-30"}
          monthFormat={"MMMM yyyy "}
          scrollEnabled={true}
          horizontal={true}
          showScrollIndicator={true}
          disableMonthChange={true}
          disableAllTouchEventsForDisabledDays={true}
          onDayPress={(day) => console.log(day)}
          markedDates={markedDays}
          dayComponent={({ date, state, marking }) => {
            return (
              <TouchableOpacity
                style={{
                  ...styles.calDate,
                  backgroundColor: marking?.today
                    ? "rgba(100, 100, 100, 0.3)"
                    : null,
                }}
              >
                <Text
                  style={{
                    ...styles.calDateText,
                    color: state === "disabled" ? "gray" : theme.black,
                  }}
                >
                  {date.day}
                </Text>
                {marking?.marked === true ? (
                  <Image style={styles.calDateImg} source={profileImg} />
                ) : null}
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.diaryContainer}>
        <Text
          style={{ color: theme.purpleDark, fontSize: 16, fontWeight: "500" }}
        >
          03 Sep 2022
        </Text>
        <View style={styles.diaryRow}>
          <Text style={styles.diaryRowTitle}>키워드</Text>
          <Image style={{ width: 25, height: 25 }} source={profileImg} />
        </View>
        <View style={styles.diaryRow}>
          <Text style={styles.diaryRowTitle}>기술</Text>
          <Text>{daily.techtag[0].tech_title}</Text>
        </View>
        {[
          ["시간", daily.diary_time],
          ["제목", daily.diary_title],
          ["내용", daily.diary_content],
        ].map((v, i) => {
          return (
            <View key={i} style={styles.diaryRow}>
              <Text style={styles.diaryRowTitle}>{v[0]}</Text>
              <Text style={styles.diaryRowContent}>{v[1]}</Text>
            </View>
          );
        })}
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
    fontWeight: "600",
    marginBottom: 5,
  },
  calCategorayContainer: {
    flex: 0.8,
    backgroundColor: theme.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: theme.marginHorizontal,
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
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    borderRadius: 10,
    // backgroundColor: "orange",
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  calDate: {
    // padding: 5,
    height: 45,
    width: 45,
    alignItems: "center",
    borderRadius: 10,
  },
  calDateText: {
    fontSize: 10,
    textAlign: "center",
  },
  calDateImg: {
    marginTop: 3,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  diaryContainer: {
    flex: 2,
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
  },
  diaryRow: {
    flexDirection: "row",
  },
  diaryRowTitle: {
    color: theme.grey,
  },
  diaryRowContent: {},
});
