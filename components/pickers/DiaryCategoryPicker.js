import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  DIARY_CAT,
  DIARY_CAT_IDX,
} from "../../constants/diary-category-constants";
import { theme } from "../../theme";
import { updateDiaryCategory } from "../../utils/store";

const ICON_OPACITY = {
  [true]: 0.3,
  [false]: 1,
  ACTIVE: 1,
};

export default function DiaryCategoryPicker({ isPicker }) {
  const opacityArr = Array(DIARY_CAT.length).fill(ICON_OPACITY[isPicker]);
  const [iconsOpacity, setIconOpacity] = useState(opacityArr);
  const storeDiary = useSelector((state) => state.editDiary);
  const dispatch = useDispatch();

  useEffect(() => {
    const i = DIARY_CAT_IDX[storeDiary.diaryCategory];
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
    dispatch(updateDiaryCategory(CAT.ID));
  };
  return (
    <View style={styles.container}>
      {DIARY_CAT.map((CAT, i) => {
        return (
          <Pressable
            key={CAT.KOR}
            style={styles.diaryCategory}
            // eslint-disable-next-line react/jsx-no-bind
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
  diaryCategoryTitle: { fontSize: 12, color: theme.grey, marginTop: 4 },
});
