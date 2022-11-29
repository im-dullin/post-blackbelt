import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme";
import { getStorageUser, saveStorageUser } from "../../utils/async-storage-fn";
import { INPUT_ERROR_MSG, INPUT_TITLE } from "../../constants/inputs-constants";

export default function Input({ type, lineInputProp }) {
  const [text, setText] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    if (user && user[type]) {
      setText(user[type]);
    }
  }, [user]);
  const loadUser = async () => {
    const storedUser = await getStorageUser();
    setUser(storedUser);
  };

  const onChangeText = (payload) => setText(payload);

  const updateUser = async () => {
    if (text === "") {
      Alert.alert(`${INPUT_TITLE[type]}을 입력하세요`, INPUT_ERROR_MSG[type], [
        { text: "OK" },
      ]);
      return;
    }
    const newUser = {
      ...user,
      [type]: text,
    };
    setUser(newUser);
    await saveStorageUser(newUser);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{INPUT_TITLE[type]}</Text>
      <TextInput
        onSubmitEditing={updateUser}
        onChangeText={onChangeText}
        value={text}
        maxLength={lineInputProp.maxLength}
        multiline={lineInputProp.multiline}
        placeholder={`${INPUT_TITLE[type]}(을/를) 입력하세요`}
        style={styles.input}
      />
      <TouchableOpacity style={styles.submit} onPress={updateUser}>
        <Text>저장</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  inputTitle: {
    fontSize: 14,
    width: 50,
    lineHeight: 20,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingTop: 15,
    paddingHorizontal: 25,
    width: 230,
    borderRadius: 30,
    fontSize: 14,
    justifyContent: "center",
  },
  submit: {
    marginLeft: 10,
    backgroundColor: theme.skyBlue,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
