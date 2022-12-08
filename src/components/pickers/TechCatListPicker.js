import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import {
  TECH_CAT,
  TECH_CAT_IDX,
} from "../../constants/tech-category-constants";
import { theme } from "../../theme";
import { updateTechCategory } from "../../utils/store";
import ListPicker from "./ListPicker";

export default function TechCatListPicker() {
  const dispatch = useDispatch();
  const dispatchPressedCategory = (catID) => {
    dispatch(updateTechCategory(catID));
  };
  const getCurrIndex = (storeDiary) => {
    return TECH_CAT_IDX[storeDiary.techCategory];
  };

  const listComponent = (CAT) => {
    return (
      <View style={styles.diaryCategory}>
        <Text style={styles.diaryCategoryEng}>{CAT.ENG}</Text>
        <Text style={styles.diaryCategoryKor}>{CAT.KOR}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ListPicker
        items={TECH_CAT}
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
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    numRows: 3,
  },
  diaryCategory: {
    width: 80,
    height: 55,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.purpleLight,
    borderRadius: 10,
    marginBottom: 10,
  },
  diaryCategoryEng: {
    fontSize: 12,
    color: theme.black,
    // marginTop: 2,
    textAlign: "center",
    fontWeight: "600",
  },
  diaryCategoryKor: { fontSize: 12, color: theme.black, marginTop: 2 },
});
