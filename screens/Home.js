import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { Calendar } from "react-native-calendars";
import profileImg from "../assets/images/profile.png";
import iconImg from "../assets/favicon.png";
import moment from "moment";
import { useEffect, useState } from "react";

let daily = {
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
let markedDays = {
  "2022-09-20": {
    calCategory: "competition",
  },
  "2022-09-21": { calCategory: "openMat" },
  "2022-09-24": { marked: true },
  "2022-09-25": { calCategory: "competition" },
};
export default function Home({ navigation }) {
  const today = moment().format(_format);
  let [selectedDay, setSelectedDay] = useState(today);
  let [days, setDays] = useState(markedDays); // days from API

  // Set today at once
  useEffect(() => {
    handleToday();
  });
  const handleToday = () => {
    if (days[today]) {
      markedDays[today] = { ...markedDays[today], today: true };
    } else {
      markedDays[today] = { today: true };
    }
    setDays(markedDays); // Update days data from api
  };

  // handle selected day
  const handleDaySelected = (props) => {
    const { dateString } = props;
    // delete previous selected mark
    const prevSelected = markedDays[selectedDay];
    if (prevSelected) delete prevSelected["selected"];
    // create or add selected object to markedDays
    if (markedDays[dateString]) {
      markedDays[dateString] = { ...markedDays[dateString], selected: true };
    } else {
      markedDays[dateString] = { selected: true };
    }
    setDays(markedDays); // Update days data from api
    setSelectedDay(dateString);
  };

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
      <View style={styles.calCategoryContainer}>
        {["가술 연습", "스파링 데이", "대회", "승급", "오픈매트"].map(
          (calCateory, index) => {
            return (
              <View key={index} style={styles.calCategory}>
                <Image style={styles.calCategoryImg} source={profileImg} />
                <Text style={{ fontSize: 10, color: theme.grey }}>
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
          }}
          minDate={"2000-01-01"}
          maxDate={"2030-05-30"}
          monthFormat={"MMMM yyyy "}
          scrollEnabled={true}
          horizontal={true}
          showScrollIndicator={true}
          disableMonthChange={true}
          disableAllTouchEventsForDisabledDays={true}
          markedDates={markedDays}
          dayComponent={({ date, state, marking }) => {
            const calCategoryImg = {
              competition: profileImg,
              openMat: iconImg,
            };
            return (
              <TouchableOpacity
                onPress={handleDaySelected.bind(this, date)} // pre-config function
                style={{
                  ...styles.calDate,
                  backgroundColor: marking?.today
                    ? "rgba(168, 216, 235, 0.4)"
                    : null,
                }}
                disabled={state === "disabled" ? true : false}
              >
                <Text
                  style={{
                    ...styles.calDateText,
                    color: state === "disabled" ? "gray" : theme.black,
                  }}
                >
                  {date.day}
                </Text>
                {/* Calendar category icons */}
                {marking ? (
                  <Image
                    style={styles.calDateImg}
                    source={calCategoryImg[marking?.calCategory]}
                  />
                ) : null}
                {/* Selected marking */}
                {marking?.selected === true ? (
                  <View style={styles.calSelected} />
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
    marginTop: 50,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileUserName: {
    color: theme.black,
    fontSize: 22,
    fontWeight: "400",
    marginBottom: 5,
  },
  calCategoryContainer: {
    flex: 0.85,
    backgroundColor: theme.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: theme.marginHorizontal,
    marginBottom: 10,
    borderRadius: 10,
  },
  calCategory: {
    width: 60,
    height: 60,
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  calCategoryImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 2,
  },
  calenderContainer: {
    flex: 7.5,
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    borderRadius: 10,
    // backgroundColor: "orange",
  },
  calendar: {
    borderRadius: 10,
    // borderBottomColor: "black",
    // borderBottomWidth: 3,
  },
  calDate: {
    // padding: 5,
    height: 50,
    width: 45,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: -5,
  },
  calDateText: {
    fontSize: 9,
    textAlign: "center",
  },
  calDateImg: {
    marginTop: 3,
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  calSelected: {
    width: 30,
    height: 2,
    backgroundColor: theme.purple,
    marginTop: 3,
  },
  diaryContainer: {
    flex: 1.9,
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
  },
  diaryRow: {
    flexDirection: "row",
    overflow: "hidden",
  },
  diaryRowTitle: {
    color: theme.grey,
  },
  diaryRowContent: {},
});
