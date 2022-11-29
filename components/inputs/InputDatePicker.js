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
import { getStorageUser, saveStorageUser } from "../../utils/async-storage-fn";
import { INPUT_ERROR_MSG, INPUT_TITLE } from "../../constants/inputs-constants";
import { dateFormatter } from "../../constants/formatter";

export default function DatePicker({ type }) {
  const [user, setUser] = useState({});
  // date picker
  const [showingDate, setShowingDate] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState(theme.white);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUser();
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
    return storedUser;
  };

  const updateUser = async () => {
    setBackgroundColor(theme.white);
    setLoading(true);
    const storedUser = await loadUser();
    if (showingDate === "") {
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
      [type]: date,
    };
    setUser(newUser);
    await saveStorageUser(newUser);
    setLoading(false);
  };

  const onChange = (event, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
    setShowingDate(dateFormatter(selectedDate));
  };

  const showDatepicker = () => {
    setBackgroundColor(theme.lightred);
    setShow(true);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{INPUT_TITLE[type]}</Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.touchable}>
        <TextInput
          pointerEvents="none"
          style={{ ...styles.input, backgroundColor }}
          placeholder={`${INPUT_TITLE[type]}(을/를) 입력하세요`}
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
        {loading && (
          <View style={styles.loading}>
            <Text>저장중입니다.. 기다려주세요..</Text>
          </View>
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
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 230,
    borderRadius: 30,
    // marginTop: 20,
    fontSize: 14,
    color: "black",
  },
  submit: {
    marginLeft: 5,
    backgroundColor: theme.skyBlue,
    paddingVertical: 22,
    paddingHorizontal: 14,
    borderRadius: 5,
  },
  touchable: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
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
  loading: {
    position: "absolute",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
});
