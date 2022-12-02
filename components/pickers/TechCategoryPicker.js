import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  TECH_CAT,
  TECH_CAT_IDX,
} from "../../constants/tech-category-constants";
import { theme } from "../../theme";
import { updateTechCategory } from "../../utils/store";

const ICON_OPACITY = {
  INACTIVE: 0.5,
  ACTIVE: 1,
};
export default function TechCategoryPicker() {
  const opacityArr = Array(TECH_CAT.length).fill(ICON_OPACITY.INACTIVE);
  const [iconsOpacity, setIconOpacity] = useState(opacityArr);
  const storeDiary = useSelector((state) => state.editDiary);
  const dispatch = useDispatch();

  useEffect(() => {
    const i = TECH_CAT_IDX[storeDiary.techCategory];
    updateIconOpacity(i);
  }, [storeDiary]);

  useEffect(() => {}, [iconsOpacity]);

  const updateIconOpacity = (i) => {
    setIconOpacity(() => {
      const result = opacityArr;
      result[i] = ICON_OPACITY.ACTIVE;
      return result;
    });
  };

  const handlePressIcon = (CAT, i) => {
    updateIconOpacity(i);
    dispatch(updateTechCategory(CAT.ID));
  };
  return (
    <View style={styles.container}>
      {TECH_CAT.map((CAT, i) => {
        return (
          <Pressable
            key={CAT.KOR}
            style={{ ...styles.diaryCategory, opacity: iconsOpacity[i] }}
            onPress={handlePressIcon.bind(this, CAT, i)}
          >
            <Text style={styles.diaryCategoryEng}>{CAT.ENG}</Text>
            <Text style={styles.diaryCategoryKor}>{CAT.KOR}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
    height: 45,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.purpleLight,
    borderRadius: 10,
  },
  diaryCategoryEng: {
    fontSize: 9,
    color: theme.black,
    marginTop: 2,
    fontWeight: "600",
  },
  diaryCategoryKor: { fontSize: 10, color: theme.black, marginTop: 2 },
});
