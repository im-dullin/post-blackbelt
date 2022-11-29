import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
  const singleInputProp = {
    maxLength: 20,
    multiline: false,
  };
  const multiInputProp = {
    maxLength: 40,
    multiline: true,
  };

  return (
    <View style={styles.container}>
      <Header headerInfo={headerInfo} navigation={navigation} />
      <View style={styles.inputs}>
        <KeyboardAwareScrollView>
          <Input type={INPUT_TYPE.NAME} lineInputProp={singleInputProp} />
          <Input type={INPUT_TYPE.TEAM} lineInputProp={singleInputProp} />
          <DatePicker type={INPUT_TYPE.START_DATE} />
          <DatePicker type={INPUT_TYPE.PROMOTION_DATE} />
          <Input type={INPUT_TYPE.YEARLY_GOAL} lineInputProp={multiInputProp} />
          <Input
            type={INPUT_TYPE.MONTHLY_GOAL}
            lineInputProp={multiInputProp}
          />
        </KeyboardAwareScrollView>
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
