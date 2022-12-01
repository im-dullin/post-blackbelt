import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../../theme";

export default function DiaryEditor() {
  const [text, setText] = useState("");
  // const [diaryContent, setCoin] = useState({});
  const [backgroundColor, setBackgroundColor] = useState(theme.white);

  const onChangeText = (payload) => {
    setBackgroundColor(theme.lightred);
    setText(payload);
  };
  return (
    <>
      <Text>일기 내용을 작성하세요</Text>
      <View id="input-title">
        <Text>Title</Text>
      </View>
      <View id="input-diary">
        <TextInput
          //   onSubmitEditing={updateUser}
          onChangeText={onChangeText}
          value={text}
          maxLength={200}
          multiline={true}
          placeholder={"일기를 입력하세요.(200 자 이내)"}
          style={{ ...styles.input, backgroundColor }}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  input: {},
});
