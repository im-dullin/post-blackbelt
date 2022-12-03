import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../theme";
import { updateContent, updateTitle } from "../../utils/store";

export default function DiaryEditor() {
  const storeDiary = useSelector((state) => state.editDiary);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(storeDiary.title);
    setContent(storeDiary.content);
  }, [storeDiary]);
  useEffect(() => {
    const saveData = setTimeout(() => {
      dispatch(updateTitle(title));
    }, 500);

    // cleanup function
    return () => {
      clearTimeout(saveData);
    };
  }, [title]);

  const onChangeTitle = (payload) => {
    setTitle(payload);
  };

  useEffect(() => {
    const saveData = setTimeout(() => {
      dispatch(updateContent(content));
    }, 500);

    // cleanup function
    return () => {
      clearTimeout(saveData);
    };
  }, [content]);

  const onChangeContent = (payload) => {
    setContent(payload);
  };
  return (
    <View style={styles.container}>
      <Text>일기 내용을 작성하세요</Text>
      <View id="input-title" style={styles.titleContainer}>
        <Text>Title</Text>
        <TextInput
          onChangeText={onChangeTitle}
          value={title}
          maxLength={20}
          multiline={false}
          placeholder="제목을 입력하세요.(20 자 이내)"
          placeholderTextColor={theme.grey}
          style={styles.titleInput}
        />
      </View>
      <View id="input-content" style={styles.contentContainer}>
        <TextInput
          onChangeText={onChangeContent}
          value={content}
          maxLength={500}
          multiline
          placeholder="일기를 입력하세요.(500 자 이내)"
          placeholderTextColor={theme.grey}
          style={styles.contentInput}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  contentContainer: {
    flex: 5,
    width: "100%",
    backgroundColor: "rgb(245,241,249)",
    borderRadius: 10,
    padding: 10,
  },
  titleInput: {
    marginLeft: 15,
    backgroundColor: "rgb(245,241,249)",
    padding: 10,
    width: "70%",
    borderRadius: 10,
  },
  contentInput: {},
});
