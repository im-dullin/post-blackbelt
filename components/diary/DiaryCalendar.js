import { Calendar } from "react-native-calendars";
import { theme } from "../../theme";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DIARY_CAT } from "../../constants/diary-category-constants";
import moment from "moment";
const _format = "YYYY-MM-DD";
const markedDays = {
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
export default function DiaryCalendar() {
  // {/* ✉️ react-native-calendars module: https://github.com/wix/react-native-calendars */}

  const today = moment().format(_format);
  const [selectedDay, setSelectedDay] = useState(today);
  const [days, setDays] = useState({});
  const [reRender, setRerender] = useState(true);

  useFocusEffect(
    // useEffect hook in react-native Tab navigator
    useCallback(() => {
      setDays(markedDays); // Get ays from API
      handleToday();
      setSelectedDay(today);
      return () => {};
    }, [])
  );

  const checkToday = (compareDay, updateMark) => {
    if (compareDay === today) {
      return { today: true, ...updateMark };
    }
    return updateMark;
  };
  const updateSetDays = (isDaysContain, updateDay, updateMark) => {
    if (isDaysContain) {
      return setDays((prevState) => {
        return {
          ...prevState,
          [updateDay]: { ...prevState[updateDay], ...updateMark },
        };
      });
    }
    setDays((prevState) => {
      return {
        ...prevState,
        [updateDay]: updateMark,
      };
    });
  };

  const handleToday = () => {
    updateSetDays(days[today], today, { today: true, selected: true });
  };

  // handle selected day
  const handleDaySelected = (props) => {
    const { dateString: currSelectedDay } = props;
    const prevSelected = days[selectedDay];
    const currSelected = days[currSelectedDay];
    // delete previous selected mark
    const prevUpdateMark = checkToday(selectedDay, { selected: false });
    updateSetDays(prevSelected, selectedDay, prevUpdateMark);

    // create or add selected object to markedDays
    const currUpdateMark = checkToday(currSelectedDay, { selected: true });
    updateSetDays(currSelected, currSelectedDay, currUpdateMark);

    setSelectedDay(currSelectedDay);
  };

  const createCalendar = ({ date, state, marking }) => {
    return (
      <TouchableOpacity
        key={date.dateString}
        onPress={handleDaySelected.bind(this, date)}
        style={{
          ...styles.calDate,
          backgroundColor: marking?.today && "rgba(168, 216, 235, 0.4)",
        }}
        disabled={state === "disabled"}
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

        {marking?.selected === true && <View style={styles.calSelected} />}
      </TouchableOpacity>
    );
  };

  return (
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
      enableSwipeMonths
      disableAllTouchEventsForDisabledDays
      markedDates={days}
      dayComponent={createCalendar}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
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
