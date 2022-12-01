import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";
import DiaryCategory from "../../components/diary/DiaryCategory";
import DiaryEditor from "../../components/diary/DiaryEditor";
import EditDiaryHeader from "../../components/utils/EditDiaryHeader";

import { theme } from "../../theme";
export default function EditDiary({ navigation }) {
  const storeDate = useSelector((state) => state.selectedDate);
  const storeDiary = useSelector((state) => state.editDiary);

  const handleSaveBtn = () => {};

  return (
    <View style={styles.container}>
      <EditDiaryHeader handleSaveBtn={handleSaveBtn} navigation={navigation} />
      <View id="diary-category" style={styles.CategoryContainer}>
        <Text>어떤 일정을 기록하고 싶으신가요?</Text>
        <DiaryCategory isSelecter={true} />
      </View>
      <View id="tech-category" style={styles.CategoryContainer}>
        <Text>오늘 배운 내용을 기술 트리에 저장해보세요.</Text>
        {/* picker component 따로 뺴기 */}
      </View>
      <View id="edit-diary-container" style={styles.editDirayContainer}>
        <DiaryEditor isSelecter={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CategoryContainer: {
    flex: 0.8,
    backgroundColor: theme.white,
    margin: 15,
    marginBottom: 0,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  editDirayContainer: {
    flex: 3,
    backgroundColor: theme.white,
    margin: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
