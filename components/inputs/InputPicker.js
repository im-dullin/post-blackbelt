import { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { INPUT_ERROR_MSG, INPUT_TITLE } from "../../constants/inputs-constants";
import { theme, themeBelt } from "../../theme";
import { getStorageUser, saveStorageUser } from "../../utils/async-storage-fn";
import DropdownPicker from "../pickers/DropdownPicker";

export default function InputPicker({ type, pickerItem }) {
  const [user, setUser] = useState({});
  // picker
  const [selectedData, setSelectedData] = useState("");

  const [backgroundColor, setBackgroundColor] = useState(themeBelt.white);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    if (user && user[type]) {
      setSelectedData(user[type]);
    }
  }, [user]);

  const loadUser = async () => {
    const asyncStorageUser = await getStorageUser();
    setUser(asyncStorageUser);
    return asyncStorageUser;
  };

  const updateUser = async () => {
    setBackgroundColor(theme.white);
    setLoading(true);
    const asyncStorageUser = await loadUser();
    if (selectedData === "") {
      setLoading(false);
      Alert.alert(
        `${INPUT_TITLE[type]}(을/를) 선택하세요`,
        INPUT_ERROR_MSG[type],
        [{ text: "OK" }]
      );
      return;
    }
    const newUser = {
      ...asyncStorageUser,
      [type]: selectedData,
    };
    setUser(newUser);
    await saveStorageUser(newUser);
    setLoading(false);
  };

  const handleOnValueChange = (itemValue) => {
    setBackgroundColor(theme.lightred);
    setSelectedData(itemValue);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{INPUT_TITLE[type]}</Text>
      <SafeAreaView style={{ ...styles.input, backgroundColor }}>
        <DropdownPicker
          pickerItem={pickerItem}
          selectedData={selectedData}
          onValueChange={handleOnValueChange}
        />
        {loading && (
          <View style={styles.loading}>
            <Text>저장중입니다.. 기다려주세요..</Text>
          </View>
        )}
      </SafeAreaView>
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
  picker: {
    width: 160,
    // postion: "absolute",
    fontSize: 14,
    height: 45,
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 25,
    width: 230,
    borderRadius: 30,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    position: "absolute",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingTop: 15,
  },
  submit: {
    marginLeft: 5,
    backgroundColor: theme.skyBlue,
    paddingVertical: 22,
    paddingHorizontal: 14,
    borderRadius: 5,
  },
});
