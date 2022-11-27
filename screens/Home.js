import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { Calendar } from "react-native-calendars";
import profileImg from "../assets/images/profile.png";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import DiaryBrief from "../components/DairyBrief";
import { DIARY_CAT } from "../components/diaryCategory";

const _format = "YYYY-MM-DD";
let markedDays = {
  "2022-11-05": {
    diaryCategory: DIARY_CAT[0],
  },
  "2022-11-20": {
    diaryCategory: DIARY_CAT[1],
  },
  "2022-11-21": { diaryCategory: DIARY_CAT[2] },
  "2022-11-24": { marked: true },
  "2022-11-25": { diaryCategory: DIARY_CAT[3] },
};
export default function Home({ navigation }) {
  const today = moment().format(_format);
  let [selectedDay, setSelectedDay] = useState(today);
  let [days, setDays] = useState({});
  let [reRender, setRerender] = useState(true);

  useFocusEffect(
    // useEffect hook in react-native Tab navigator
    useCallback(() => {
      setDays(markedDays); // Get ays from API
      handleToday();
      setSelectedDay(today);
      return () => {};
    }, [])
  );

  const updateSetDays = (isDaysContain, updateDay, updateObject) => {
    if (isDaysContain) {
      return setDays((prevState) => {
        return {
          ...prevState,
          [updateDay]: { ...prevState[updateDay], ...updateObject },
        };
      });
    }
    setDays((prevState) => {
      return {
        ...prevState,
        [updateDay]: updateObject,
      };
    });
  };

  const handleToday = () => {
    updateSetDays(days[today], today, { today: true, selected: true });
  };

  // handle selected day
  const handleDaySelected = (props) => {
    const { dateString } = props;
    const prevSelected = days[selectedDay];
    const currSelected = days[dateString];
    // delete previous selected mark
    if (selectedDay === today) {
      updateSetDays(days[today], today, { today: true, selected: false });
    } else {
      updateSetDays(prevSelected, selectedDay, { selected: false });
    }
    // create or add selected object to markedDays
    if (dateString === today) {
      updateSetDays(days[today], today, { today: true, selected: true });
    } else {
      updateSetDays(currSelected, dateString, { selected: true });
    }
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
      </View>
      <View id="categories" style={styles.diaryCategoryContainer}>
        {DIARY_CAT.map((CAT) => {
          return (
            <View key={CAT.KOR} style={styles.diaryCategory}>
              <Image style={styles.diaryCategoryImg} source={CAT.IMG_SRC} />
              <Text style={{ fontSize: 10, color: theme.grey, marginTop: 2 }}>
                {CAT.KOR}
              </Text>
            </View>
          );
        })}
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
          initialDate={today}
          enableSwipeMonths={true}
          disableAllTouchEventsForDisabledDays={true}
          markedDates={days}
          dayComponent={({ date, state, marking }) => {
            return (
              <TouchableOpacity
                key={date.dateString}
                onPress={handleDaySelected.bind(this, date)}
                style={{
                  ...styles.calDate,
                  backgroundColor: marking?.today && "rgba(168, 216, 235, 0.4)",
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

                {marking?.diaryCategory && (
                  <Image
                    style={styles.calDateImg}
                    source={marking?.diaryCategory?.IMG_SRC}
                  />
                )}

                {marking?.selected === true && (
                  <View style={styles.calSelected} />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View id="selected-diary" style={styles.diaryContainer}>
        <DiaryBrief />
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
  diaryCategory: {
    width: 60,
    height: 60,
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  diaryCategoryImg: {
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
    position: "absolute",
    bottom: 4,
  },
  diaryContainer: {
    flex: 2.5,
  },
});
