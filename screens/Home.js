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
  "2022-10-5": {
    calCategory: "competition",
  },
  "2022-10-20": {
    calCategory: "competition",
  },
  "2022-10-21": { calCategory: "openMat" },
  "2022-10-24": { marked: true },
  "2022-10-25": { calCategory: "competition" },
};
export default function Home({ navigation }) {
  const today = moment().format(_format);
  let [selectedDay, setSelectedDay] = useState(today);
  let [days, setDays] = useState({}); // days from API
  let [reRender, setRerender] = useState(true);

  // Rerendering button
  // ✉️ setRerender를 전역 상태로 관리해서 navigation tab 바뀔 때마다 rerendering하자
  const refreshClicked = () => {
    setRerender((prev) => !prev);
  };
  // fetching data and set today at first rendering
  useEffect(() => {
    setDays(markedDays);
    handleToday();
  }, [reRender]);

  const handleToday = () => {
    if (days[today]) {
      setDays((prevState) => {
        return {
          ...prevState,
          [today]: { ...prevState[today], today: true },
        };
      });
    } else {
      setDays((prevState) => {
        return {
          ...prevState,
          [today]: { today: true },
        };
      });
    }
  };

  // handle selected day
  const handleDaySelected = (props) => {
    const { dateString } = props;
    const prevSelected = days[selectedDay];
    const currSelected = days[dateString];
    // delete previous selected mark
    if (prevSelected) {
      setDays((prevState) => {
        return {
          ...prevState,
          [selectedDay]: { ...prevState[selectedDay], selected: false },
        };
      });
    }
    // create or add selected object to markedDays
    if (currSelected) {
      setDays((prevState) => {
        return {
          ...prevState,
          [dateString]: { ...prevState[dateString], selected: true },
        };
      });
    } else {
      setDays((prevState) => {
        return {
          ...prevState,
          [dateString]: { selected: true },
        };
      });
    }
    // 왜 리렌더링 안되는가?: 비동기로 동작하므로 useEffect() 의존성 배열 활용  or 인자로 함수를 넣기
    setSelectedDay(dateString);
  };

  return (
    <View style={styles.container}>
      <View id="profile" style={styles.profileContainer}>
        <Image style={styles.profileImg} source={profileImg} />
        <View style={{ alignContent: "center" }}>
          <Text style={styles.profileUserName}>Rafael Mendes</Text>
          <Text style={{ color: theme.grey }}>
            이번 달 00일 중 00일을 수련하셨습니다{" "}
          </Text>
        </View>
        <TouchableOpacity onPress={refreshClicked}>
          <Text>refresh</Text>
        </TouchableOpacity>
      </View>
      <View id="categories" style={styles.calCategoryContainer}>
        {["가술 연습", "스파링 데이", "대회", "승급", "오픈매트"].map(
          (calCateory, index) => {
            return (
              <View key={index} style={styles.calCategory}>
                <Image style={styles.calCategoryImg} source={profileImg} />
                <Text style={{ fontSize: 10, color: theme.grey, marginTop: 2 }}>
                  {calCateory}
                </Text>
              </View>
            );
          }
        )}
      </View>
      <View id="calendar" style={styles.calenderContainer}>
        {/* ✉️ react-native-calendars module: https://github.com/wix/react-native-calendars */}
        <Calendar
          style={styles.calendar}
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
          disableAllTouchEventsForDisabledDays={true}
          markedDates={days}
          dayComponent={({ date, state, marking }) => {
            const calCategoryImg = {
              competition: profileImg,
              openMat: iconImg,
            };
            return (
              <TouchableOpacity
                key={date.dateString}
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
      <View id="selected-diary" style={styles.diaryContainer}>
        <Text
          style={{
            color: theme.purpleDark,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          03 Sep 2022
        </Text>
        <View style={styles.diaryRowCategories}>
          <Image style={styles.diaryRowCategory} source={profileImg} />
          <Image style={styles.diaryRowCategory} source={profileImg} />
          <Image style={styles.diaryRowCategory} source={profileImg} />
        </View>
        <View style={styles.diaryRow}>
          <Text style={styles.diaryRowTitle}>기술</Text>
          <Text style={styles.diaryRowContent}>
            {daily.techtag[0].tech_title}
          </Text>
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
    width: 25,
    height: 25,
    borderRadius: 12.5,
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
    marginVertical: 7,
    borderRadius: 10,
    padding: 10,
  },
  diaryRowCategories: {
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 3,
  },
  diaryRowCategory: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  diaryRow: {
    flexDirection: "row",
    alignContent: "center",
    overflow: "hidden",
    marginBottom: 1,
    height: 17,
  },
  diaryRowTitle: {
    color: theme.grey,
    width: 45,
    fontSize: 12,
    // marginRight: 10,
  },
  diaryRowContent: {
    fontSize: 12,
    alignSelf: "stretch",
  },
});
