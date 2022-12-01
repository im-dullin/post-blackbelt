import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { DIARY_CAT } from "../../constants/diary-category-constants";
import { theme } from "../../theme";
import { updateDiaryCategory } from "../../utils/store";

const ICON_OPACITY = {
  [true]: 0.3,
  [false]: 1,
  ACTIVE: 1,
};
export default function DiaryCategory({ isSelecter }) {
  let opacityArr = Array(DIARY_CAT.length).fill(ICON_OPACITY[isSelecter]);
  const [iconsOpacity, setIconOpacity] = useState(opacityArr);
  const dispatch = useDispatch();

  useEffect(() => {}, [iconsOpacity]);

  const handlePressIcon = (CAT, i) => {
    setIconOpacity(() => {
      let result = opacityArr;
      result[i] = ICON_OPACITY.ACTIVE;
      return result;
    });
    dispatch(updateDiaryCategory(CAT.ID));
  };
  return (
    <View style={styles.container}>
      {DIARY_CAT.map((CAT, i) => {
        return (
          <Pressable
            key={CAT.KOR}
            style={styles.diaryCategory}
            onPress={handlePressIcon.bind(this, CAT, i)}
          >
            <Image
              style={{
                ...styles.diaryCategoryImg,
                opacity: iconsOpacity[i],
              }}
              source={CAT.IMG_SRC}
            />
            <Text style={styles.diaryCategoryTitle}>{CAT.KOR}</Text>
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
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  diaryCategoryImg: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  diaryCategoryTitle: { fontSize: 10, color: theme.grey, marginTop: 2 },
});
