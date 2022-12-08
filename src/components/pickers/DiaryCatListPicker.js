import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  DIARY_CAT,
  DIARY_CAT_IDX,
} from "../../constants/diary-category-constants";
import { theme } from "../../theme";
import { updateDiaryCategory } from "../../utils/store";
import ListPicker from "./ListPicker";

export default function DiaryCatListPicker() {
  const dispatch = useDispatch();
  const dispatchPressedCategory = (catID) => {
    dispatch(updateDiaryCategory(catID));
  };
  const getCurrIndex = (storeDiary) => {
    return DIARY_CAT_IDX[storeDiary.diaryCategory];
  };

  const listComponent = (CAT) => {
    return (
      <View style={styles.diaryCategory}>
        <Image style={styles.diaryCategoryImg} source={CAT.IMG_SRC} />
        <Text style={styles.diaryCategoryTitle}>{CAT.KOR}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ListPicker
        items={DIARY_CAT}
        dispatch={dispatchPressedCategory}
        getCurrIndex={getCurrIndex}
        jsx={listComponent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  diaryCategory: {
    width: 60,
    height: 60,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  diaryCategoryImg: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  diaryCategoryTitle: { fontSize: 12, color: theme.grey, marginTop: 4 },
});
