import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Header from "../../components/utils/Header";
import { SCREEN_NAME, TAB_NAME } from "../../constants/screen-constants";
import DiaryFull from "../../components/diary/DiaryFull";
import { theme } from "../../theme";
import { handleAlert } from "../../utils/react-native-utils";
import { deleteDiaryById } from "../../utils/sql-db";

export default function ReadDiary({ route, navigation }) {
  const { diary } = route.params;

  const handleGoBack = () => {
    if (route.params.prevScreen === SCREEN_NAME.TECH_DETAIL) {
      return navigation.navigate(TAB_NAME.TECH_TREE);
    }
    navigation.goBack();
  };

  const headerInfo = {
    left: {
      icon: "chevron-left",
      iconColor: "black",
      onPress: handleGoBack,
    },
    title: "Diary",
    right: {
      icon: "more-vert",
      iconColor: "white",
      onPress: () => {},
    },
  };

  const handleUpdate = () => {
    navigation.navigate(SCREEN_NAME.EDIT_DIARY, { date: diary.date });
  };

  const handleDeleteDiary = () => {
    deleteDiaryById(diary.id);
    handleGoBack();
  };
  const handleDelete = () => {
    handleAlert(
      "일기를 삭제하시겠습니까?",
      "삭제된 데이터는 복구할 수 없습니다",
      [
        { text: "취소", onPress: () => {} },

        {
          text: "삭제",
          onPress: handleDeleteDiary,
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header headerInfo={headerInfo} />
      <View style={styles.diaryContainer}>
        <DiaryFull diary={diary} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
          <Text>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
          <Text>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diaryContainer: {
    flex: 5,
    marginTop: 10,
  },
  updateBtn: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: theme.skyBlue,
    right: 0,
  },
  deleteBtn: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: theme.pink,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
});
