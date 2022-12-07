import { Alert } from "react-native";
import {
  INPUT_ERROR_MSG,
  INPUT_TITLE,
} from "../constants/user-inputs-constants";

/**
 *
 * @param {string} alertMsg
 * @param {string} subMsg
 * @param {array} btns
 */
export const handleAlert = (alertMsg, subMsg, btns) => {
  Alert.alert(alertMsg, subMsg, btns, {
    cancelable: true,
    onDismiss: () => {},
  });
};

export const handleInputAlert = (type) => {
  Alert.alert(
    `${INPUT_TITLE[type]}(을/를) 선택하세요`,
    INPUT_ERROR_MSG[type],
    [{ text: "OK" }],
    {
      cancelable: true,
      onDismiss: () => {},
    }
  );
};
