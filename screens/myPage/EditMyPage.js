import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "../../components/Header";
import DatePicker from "../../components/inputs/InputDatePicker";
import Input from "../../components/inputs/Input";
import InputPicker from "../../components/inputs/InputPicker";
import { SCREEN_NAME } from "../../constants/screen-constants";
import {
  BELT_COLOR_KEY,
  BELT_GRAU_KEY,
} from "../../constants/inputs-constants";
import { getStorageUser } from "../../utils/async-storage-fn";

const headerInfo = {
  left: {
    icon: "chevron-left",
    iconColor: "black",
    onPress: {
      navigate: SCREEN_NAME.MY_PAGE,
    },
  },
  title: `Edit ${SCREEN_NAME.MY_PAGE}`,
  right: {
    icon: "delete",
    iconColor: "black",
    onPress: {
      // navigate: SCREEN_NAME.LOGIN,
      msg: "deleteUser", // test for delete userStorage
    },
  },
};
const INPUT_TYPE = {
  NAME: "NAME",
  TEAM: "TEAM",
  START_DATE: "START_DATE",
  BELT_COLOR: "BELT_COLOR",
  BELT_GRAU: "BELT_GRAU",
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
          <InputPicker
            type={INPUT_TYPE.BELT_COLOR}
            pickerItem={BELT_COLOR_KEY}
          />
          <InputPicker type={INPUT_TYPE.BELT_GRAU} pickerItem={BELT_GRAU_KEY} />
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
