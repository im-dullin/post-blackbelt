import { Picker } from "@react-native-picker/picker";
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
import { theme } from "../../theme";
import { getStorageUser, saveStorageUser } from "../../utils/async-storage-fn";

export default function InputPicker({ type, pickerItem }) {
  const [user, setUser] = useState({});
  // picker
  const [selectedData, setSelectedData] = useState("");

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
    const storedUser = await getStorageUser();
    setUser(storedUser);
    return storedUser;
  };

  const updateUser = async () => {
    const storedUser = await loadUser();
    if (selectedData === "") {
      Alert.alert(
        `${INPUT_TITLE[type]}(을/를) 선택하세요`,
        INPUT_ERROR_MSG[type],
        [{ text: "OK" }]
      );
      return;
    }
    const newUser = {
      ...storedUser,
      [type]: selectedData,
    };
    setUser(newUser);
    await saveStorageUser(newUser);
    setLoading(false);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{INPUT_TITLE[type]}</Text>
      <SafeAreaView style={styles.input}>
        <Picker
          selectedValue={selectedData}
          style={styles.picker}
          itemStyle={{
            height: 40,
            transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
          }}
          mode="dropdown"
          onValueChange={(itemValue) => setSelectedData(itemValue)}
        >
          <Picker.Item label="" value="" />
          {pickerItem.map((item) => {
            return <Picker.Item key={item} label={item} value={item} />;
          })}
        </Picker>
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
    backgroundColor: "white",
    // paddingVertical: 15,
    // paddingTop: 15,
    paddingHorizontal: 25,
    width: 230,
    borderRadius: 30,
    // fontSize: 14,
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
    marginLeft: 10,
    backgroundColor: theme.skyBlue,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
