import { StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";
import EditDiaryHeader from "../../components/utils/EditDiaryHeader";

import { theme } from "../../theme";
export default function EditDiary({ navigation }) {
  const storeDate = useSelector((state) => state.selectedDate);

  const handleSaveBtn = () => {};

  return (
    <View style={styles.container}>
      <EditDiaryHeader handleSaveBtn={handleSaveBtn} navigation={navigation} />
      <View id="diary-category" style={styles.diaryCategoryContainer}></View>
      <View id="tech-category" style={styles.techCategoryContainer}></View>
      <View id="edit-diary-container" style={styles.editDirayContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diaryCategoryContainer: {
    flex: 0.8,
    backgroundColor: theme.skyBlue,
  },
  techCategoryContainer: {
    flex: 0.8,
    backgroundColor: theme.purple,
  },
  editDirayContainer: {
    flex: 3,
    backgroundColor: theme.pink,
  },
});
