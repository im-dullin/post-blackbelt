import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DiaryEditor from "../../components/diary/DiaryEditor";
import DiaryCategoryPicker from "../../components/pickers/DiaryCategoryPicker";
import TechCategoryPicker from "../../components/pickers/TechCategoryPicker";
import EditDiaryHeader from "../../components/utils/EditDiaryHeader";

import { theme } from "../../theme";
import { initializeEditDiray, updateEditDiary } from "../../utils/store";

import { SCREEN_NAME } from "../../constants/screen-constants";
import { db, saveData, saveNewDiary } from "../../utils/sql-db";

export default function EditDiary({ navigation }) {
  const storeDate = useSelector((state) => state.selectedDate);
  const storeDiary = useSelector((state) => state.editDiary);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeEditDiray());
  }, []);
  // console.log(storeDiary);

  const handleAlert = (alertMsg, btns) => {
    Alert.alert(alertMsg, "", btns, {
      cancelable: true,
      onDismiss: () => {},
    });
  };
  // const checkCurrentDiary = async () => {
  //   const asyncStorageYearMonth = await getStorageYearMonth(dateStorageKey);
  //   const asyncStorageDiary = await getStorageDiary();
  //   const asyncStorageDiaryCat = await getStorageDiaryCat();
  //   const asyncStorageTechCat = await getStorageTechCat();
  //   console.log(asyncStorageYearMonth);
  //   console.log(asyncStorageDiary);
  //   console.log(asyncStorageDiaryCat);
  //   console.log(asyncStorageTechCat);

  //   if (
  //     asyncStorageYearMonth &&
  //     isIncludeKey(asyncStorageYearMonth, storeDate)
  //   ) {
  //     const id = asyncStorageYearMonth[storeDate];
  //     dispatch(updateEditDiary(asyncStorageDiary[id]));
  //     setDiaryId(id);
  //   }
  // };

  // 살려
  // const handleEmptyValue = async (value, alrtMsg) => {
  //   const isEmpty = value === ""
  //   if (isEmpty) {
  //     handleAlert(alrtMsg, [{ text: "확인" }]);
  //   }
  //   return isEmpty;
  // };

  const isDiaryEmpty = async () => {
    if (storeDiary.diaryCategory === "") {
      handleAlert("기록할 일정을 선택해주세요", [{ text: "확인" }]);
      return true;
    }
    if (storeDiary.techCategory === "") {
      handleAlert("기술 카테고리를 선택해주세요", [{ text: "확인" }]);
      return true;
    }
    if (storeDiary.title === "") {
      handleAlert("일기 제목을 작성해주세요", [{ text: "확인" }]);
      return true;
    }
    if (storeDiary.content === "") {
      handleAlert("일기 내용을 작성해주세요", [{ text: "확인" }]);
      return true;
    }
    return false;
  };

  const handleResult = (txObj, result) => {
    console.log(result);
  };
  const handleSaveDiary = async () => {
    const newDiary = {
      date: storeDate,
      ...storeDiary,
    };

    saveNewDiary(newDiary, handleResult);

    navigation.navigate(SCREEN_NAME.HOME);
  };

  const handleSaveBtn = async () => {
    const isEmpty = await isDiaryEmpty();
    if (isEmpty) {
      return;
    }
    handleAlert("일기를 저장할까요?", [
      { text: "취소" },
      { text: "저장", onPress: handleSaveDiary },
    ]);
  };

  return (
    <View style={styles.container}>
      <EditDiaryHeader handleSaveBtn={handleSaveBtn} navigation={navigation} />
      <View style={{ flex: 4.8 }}>
        <KeyboardAwareScrollView>
          <View id="diary-category" style={styles.CategoryContainer}>
            <Text>어떤 일정을 기록하고 싶으신가요?</Text>
            <DiaryCategoryPicker isPicker />
          </View>
          <View id="tech-category" style={styles.CategoryContainer}>
            <Text>오늘 배운 내용을 기술 트리에 저장해보세요.</Text>
            <TechCategoryPicker />
          </View>
          <View id="edit-diary-container" style={styles.editDirayContainer}>
            <DiaryEditor isSelecter />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CategoryContainer: {
    height: 90,
    backgroundColor: theme.white,
    margin: 15,
    marginBottom: 0,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  editDirayContainer: {
    height: 420,
    backgroundColor: theme.white,
    margin: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
