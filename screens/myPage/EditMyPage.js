import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { SCREEN_NAME } from "../../constants/names";
import { theme } from "../../theme";
import { getStorageUser, saveStorageUser } from "../../utils/async-storage-fn";

const headerInfo = {
  left: {
    icon: "chevron-left",
    iconColor: "black",
    navigate: SCREEN_NAME.MY_PAGE,
  },
  title: `Edit ${SCREEN_NAME.MY_PAGE}`,
  right: {
    icon: "check",
    iconColor: "white",
    // navigate: SCREEN_NAME.LOGIN,
    navigate: SCREEN_NAME.EDIT_MY_PAGE,
  },
};
export default function EditMyPage({ navigation }) {
  const [text, setText] = useState("");

  const [user, setUser] = useState({});
  const preUser = {
    name: "Quartz",
    team: "Wire Jiu-jitsu",
    startDate: "2022.11.11",
    DDay: 1234,
  };
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const storedUser = await getStorageUser();
    setUser(storedUser);
  };

  const onChangeText = (payload) => setText(payload);

  //   const saveUser = async (toSave) => {
  //     try {
  //       await AsyncStorage.setItem(STORAGE_KEY.USER, JSON.stringify(toSave));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const loadUser = async () => {
  //     try {
  //       const jsonData = await AsyncStorage.getItem(STORAGE_KEY.USER);
  //       return jsonData != null ? JSON.parse(jsonData) : null;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setUser(JSON.parse(jsonData));
  //   };

  const updateUser = async (type) => {
    if (text === "") {
      return;
    }
    const newUser = {
      ...user,
      [type]: text,
    };
    setUser(newUser);
    await saveStorageUser(newUser);
    setText("");
  };
  return (
    <View style={styles.container}>
      <Header headerInfo={headerInfo} navigation={navigation} />
      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>이름</Text>
          <TextInput
            onSubmitEditing={updateUser.bind(this, "name")} //2
            onChangeText={onChangeText}
            value={text}
            defaultValue={preUser.name}
            placeholder={user.name ? user.name : "이름을 입력하세요"}
            // keyboardType="decimal-pad"
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.submit}
            onPress={updateUser.bind(this, "name")}
          >
            <Text>저장</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputs: {
    flex: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  inputTitle: {
    fontSize: 14,
    width: 60,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 230,
    borderRadius: 30,
    // marginTop: 20,
    fontSize: 18,
  },
  submit: {
    marginLeft: 15,
    backgroundColor: theme.skyBlue,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
