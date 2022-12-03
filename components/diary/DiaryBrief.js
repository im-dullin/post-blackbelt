import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { theme } from "../../theme";
import {
  DIARY_CAT,
  DIARY_CAT_IMG_SRC,
} from "../../constants/diary-category-constants";
import { getDiaryByDate } from "../../utils/sql-db";
import {
  TECH_CAT,
  TECH_CAT_MAP,
} from "../../constants/tech-category-constants";

export default function DiaryBrief({ date }) {
  const [diary, setDiary] = useState({});

  useEffect(() => {
    getDiaryByDate(date, handleDiary);
  }, [date]);

  const handleDiary = (tx, result) => {
    setDiary(result.rows._array[0]);
  };

  return (
    <View style={styles.diaryContainer}>
      <Text style={styles.date}>{date}</Text>
      {!diary ? (
        <Text style={styles.noDiaryText}>
          일기가 없습니다. 운동을 기록해보세요.
        </Text>
      ) : (
        <>
          <View style={styles.diaryRow}>
            <Text style={styles.diaryRowTitle}>카테고리</Text>
            {diary?.diaryCategory && (
              <Image
                style={styles.diaryCategory}
                source={DIARY_CAT_IMG_SRC[diary?.diaryCategory]}
              />
            )}
            {diary?.techCategory && (
              <View
                style={{
                  ...styles.techCategory,
                  backgroundColor: theme[diary?.techCategory],
                }}
              >
                <Text style={styles.techCategoryTitle}>
                  {TECH_CAT_MAP[diary?.techCategory].ENG}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.diaryRow}>
            <Text style={styles.diaryRowTitle}>제목</Text>
            <Text style={styles.diaryRowContent}>{diary?.title}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.diaryRowTitle}>내용</Text>
            <Text style={styles.diaryRowContent}>{diary?.content}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  diaryContainer: {
    backgroundColor: theme.white,
    marginHorizontal: theme.marginHorizontal,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
  },
  date: {
    color: theme.purpleDark,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  techCategory: {
    padding: 5,
    alignContent: "center",
    borderRadius: 3,
  },
  techCategoryTitle: {
    fontSize: 12,
  },
  noDiaryText: {
    color: theme.grey,
  },
  diaryCategory: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 15,
  },
  diaryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // height: 17,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    // overflow: "hidden",
    width: "90%",
    marginBottom: 10,
    height: 34,
    lineHeight: 20,
  },
  diaryRowTitle: {
    color: theme.grey,
    fontSize: 13,
    marginRight: 10,
  },
  diaryRowContent: {
    fontSize: 13,
    lineHeight: 17,
    // alignSelf: "stretch",
  },
});
