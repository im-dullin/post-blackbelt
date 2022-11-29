import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { theme } from "../../theme";
import {
  getStorageUser,
  removeStorageData,
  saveStorageUser,
  STORAGE_KEY,
} from "../../utils/async-storage-fn";
import { INPUT_ERROR_MSG, INPUT_TITLE } from "../../constants/inputs-constants";
import { dateFormatter } from "../../constants/formatter";

export default function DatePicker({ type }) {
  const [user, setUser] = useState({});
  // date picker
  const [showingDate, setShowingDate] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadUser();
    // removeStorageData(STORAGE_KEY.USER);
  }, []);
  useEffect(() => {
    if (user && user[type]) {
      const dateData = new Date(user[type]);
      setDate(dateData);
      setShowingDate(dateFormatter(dateData));
    }
  }, [user]);

  const loadUser = async () => {
    const storedUser = await getStorageUser();
    setUser(storedUser);
  };

  const updateUser = async () => {
    if (date === "") {
      Alert.alert(`${INPUT_TITLE[type]}을 입력하세요`, INPUT_ERROR_MSG[type], [
        { text: "OK" },
      ]);
      return;
    }
    const newUser = {
      ...user,
      [type]: date,
    };
    setUser(newUser);
    await saveStorageUser(newUser);
  };

  const onChange = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
    setShowingDate(dateFormatter(selectedDate));
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{INPUT_TITLE[type]}</Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.touchable}>
        <TextInput
          pointerEvents="none"
          style={styles.input}
          placeholder={`${INPUT_TITLE[type]}을 입력하세요`}
          editable={false}
          value={showingDate}
        />
        {show && (
          <DateTimePicker
            style={styles.datePicker}
            testID="dateTimePicker"
            value={date}
            mode="date"
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
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
    paddingHorizontal: 25,
    width: 230,
    borderRadius: 30,
    // marginTop: 20,
    fontSize: 14,
    color: "black",
  },
  submit: {
    marginLeft: 10,
    backgroundColor: theme.skyBlue,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  touchable: {
    position: "relative",
    justifyContent: "center",
  },
  datePicker: {
    position: "absolute",
    zIndex: 5,
    width: 100,
    left: 0,
    backgroundColor: theme.white,
    height: 50,
    borderRadius: 50,
  },
});
