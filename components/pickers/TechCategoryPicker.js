import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { TECH_CAT } from "../../constants/tech-category-constants";
import { theme } from "../../theme";
import { updateTechCategory } from "../../utils/store";

const ICON_OPACITY = {
  INACTIVE: 0.7,
  ACTIVE: 1,
};
export default function TechCategoryPicker() {
  let opacityArr = Array(TECH_CAT.length).fill(ICON_OPACITY.INACTIVE);
  const [iconsOpacity, setIconOpacity] = useState(opacityArr);
  const dispatch = useDispatch();

  useEffect(() => {}, [iconsOpacity]);

  const handlePressIcon = (CAT, i) => {
    setIconOpacity(() => {
      let result = opacityArr;
      result[i] = ICON_OPACITY.ACTIVE;
      return result;
    });
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
    width: 70,
    height: 45,
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.skyBlue,
    borderRadius: 10,
  },
  diaryCategoryEng: {
    fontSize: 11,
    color: theme.black,
    marginTop: 2,
    fontWeight: "600",
  },
  diaryCategoryKor: { fontSize: 10, color: theme.black, marginTop: 2 },
});
