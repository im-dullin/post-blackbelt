import { View, StyleSheet, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "../../components/utils/Header";
import DatePicker from "../../components/inputs/InputDatePicker";
import Input from "../../components/inputs/Input";
import InputPicker from "../../components/inputs/InputPicker";
import { SCREEN_NAME } from "../../constants/screen-constants";
import {
  BELT_COLOR,
  BELT_COLOR_KEY,
  BELT_GRAU,
  BELT_GRAU_KEY,
  MONTHLY_GOAL,
  NAME,
  PROMOTION_DATE,
  START_DATE,
  TEAM,
  YEARLY_GOAL,
} from "../../constants/user-inputs-constants";
import { removeStorageData, STORAGE_KEY } from "../../utils/async-storage-fn";
import { handleAlert } from "../../utils/react-native-utils";
import { theme } from "../../theme";

export default function EditMyPage({ navigation }) {
  const singleInputProp = {
    maxLength: 15,
    multiline: false,
  };
  const multiInputProp = {
    maxLength: 20,
    multiline: true,
  };

  const handleNavigateAdmin = () => {
    handleAlert("모든 데이터를 삭제합니다", "개발자 모드", [
      { text: "취소" },
      {
        text: "이동",
        onPress: () => {
          navigation.navigate(SCREEN_NAME.ADMIN);
        },
      },
    ]);
  };

  const headerInfo = {
    left: {
      icon: "chevron-left",
      iconColor: "black",
      onPress: () => {
        navigation.navigate(SCREEN_NAME.MY_PAGE);
      },
    },
    title: `Edit ${SCREEN_NAME.MY_PAGE}`,
    right: {
      icon: "delete",
      iconColor: "white",
      onPress: handleNavigateAdmin,
    },
  };

  return (
    <View style={styles.container}>
      <Header headerInfo={headerInfo} />
      <View style={styles.inputs}>
        <Text style={styles.title}>
          정보를 입력하고 저장 버튼을 눌러주세요.
        </Text>
        <KeyboardAwareScrollView>
          <Input type={NAME} lineInputProp={singleInputProp} />
          <Input type={TEAM} lineInputProp={singleInputProp} />
          <DatePicker type={START_DATE} />
          <InputPicker type={BELT_COLOR} pickerItem={BELT_COLOR_KEY} />
          <InputPicker type={BELT_GRAU} pickerItem={BELT_GRAU_KEY} />
          <DatePicker type={PROMOTION_DATE} />
          <Input type={YEARLY_GOAL} lineInputProp={multiInputProp} />
          <Input type={MONTHLY_GOAL} lineInputProp={multiInputProp} />
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
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    color: theme.grey,
  },
});
