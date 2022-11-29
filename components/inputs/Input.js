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

  const [backgroundColor, setBackgroundColor] = useState(theme.white);
  const [loading, setLoading] = useState(false);
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
    return storedUser;
  };

  const onChangeText = (payload) => {
    setBackgroundColor(theme.lightred);
    setText(payload);
  };

  const updateUser = async () => {
    setBackgroundColor(theme.white);
    setLoading(true);
    const storedUser = await loadUser();
    if (text === "") {
      setLoading(false);
      Alert.alert(
        `${INPUT_TITLE[type]}(을/를) 입력하세요`,
        INPUT_ERROR_MSG[type],
        [{ text: "OK" }]
      );
      return;
    }
    const newUser = {
      ...storedUser,
      [type]: text,
    };
    setUser(newUser);
    await saveStorageUser(newUser);
    setLoading(false);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{INPUT_TITLE[type]}</Text>
      <View style={styles.inputItemWrapper}>
        <TextInput
          onSubmitEditing={updateUser}
          onChangeText={onChangeText}
          value={text}
          maxLength={lineInputProp.maxLength}
          multiline={lineInputProp.multiline}
          placeholder={`${INPUT_TITLE[type]}(을/를) 입력하세요`}
          style={{ ...styles.input, backgroundColor }}
        />
        {loading && (
          <View style={styles.loading}>
            <Text>저장중입니다.. 기다려주세요..</Text>
          </View>
        )}
      </View>
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
  inputItemWrapper: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    position: "absolute",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  input: {
    paddingVertical: 15,
    paddingTop: 15,
    paddingHorizontal: 25,
    width: 230,
    borderRadius: 30,
    fontSize: 14,
    justifyContent: "center",
  },
  submit: {
    marginLeft: 5,
    backgroundColor: theme.skyBlue,
    paddingVertical: 22,
    paddingHorizontal: 14,
    borderRadius: 5,
  },
});
