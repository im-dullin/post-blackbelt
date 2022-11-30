import { Image, StyleSheet, Text, View } from "react-native";
import { DIARY_CAT } from "../../constants/diary-category-constants";
import { theme } from "../../theme";

export default function DiaryCategory() {
  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
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
});
