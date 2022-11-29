import { Image, StyleSheet, Text, View } from "react-native";
import profileImg from "../assets/images/profile.png";
import { theme } from "../theme";
import { DIARY_CAT } from "../constants/diary-category-constants";

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

export default function DiaryBrief() {
  return (
    <View style={styles.diaryContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>03 Sep 2022</Text>
        <Image style={styles.diaryCategory} source={DIARY_CAT[3].IMG_SRC} />
      </View>
      <View style={styles.diaryRow}>
        <Text style={styles.diaryRowTitle}>기술</Text>
        <Text style={styles.diaryRowContent}>
          {daily.techtag[0].tech_title}
        </Text>
      </View>
      {[
        // ["시간", daily.diary_time],
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
  );
}

const styles = StyleSheet.create({
  diaryContainer: {
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    marginVertical: 7,
    borderRadius: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 10,
  },
  title: {
    color: theme.purpleDark,
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
  diaryCategory: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  diaryRow: {
    flexDirection: "row",
    alignContent: "center",
    overflow: "hidden",
    marginBottom: 3,
    height: 17,
  },
  diaryRowTitle: {
    color: theme.grey,
    width: 45,
    fontSize: 13,
  },
  diaryRowContent: {
    fontSize: 13,
    alignSelf: "stretch",
  },
});
