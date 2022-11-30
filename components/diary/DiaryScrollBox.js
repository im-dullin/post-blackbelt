import { ScrollView, StyleSheet } from "react-native";
import DiaryBrief from "./DiaryBrief";

export default function DiaryScrollBox() {
  return (
    <ScrollView
      vertical
      alwaysBounceVertical
      showsVerticalScrollIndicator
      contentContainerStyle={styles.diarysContainer}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => {
        return <DiaryBrief key={v} style={{ flex: 1 }} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  diarysContainer: {},
});
