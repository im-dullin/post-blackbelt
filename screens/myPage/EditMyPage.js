import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "../../components/Header";
import DatePicker from "../../components/inputs/datePicker";
import Input from "../../components/inputs/Input";
import { SCREEN_NAME } from "../../constants/screen-constants";
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
const INPUT_TYPE = {
  NAME: "NAME",
  TEAM: "TEAM",
  START_DATE: "START_DATE",
  BELT: "BELT",
  PROMOTION_DATE: "PROMOTION_DATE",
  YEARLY_GOAL: "YEARLY_GOAL",
  MONTHLY_GOAL: "MONTHLY_GOAL",
};
export default function EditMyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Header headerInfo={headerInfo} navigation={navigation} />
      <View style={styles.inputs}>
        <Input type={INPUT_TYPE.NAME} />
        <DatePicker type={INPUT_TYPE.START_DATE} />
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
});
