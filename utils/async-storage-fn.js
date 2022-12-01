import AsyncStorage from "@react-native-async-storage/async-storage";
import { NAME, PROFILE_IMG } from "../constants/inputs-constants";
import profileImg from "../assets/images/user.png";

// Manage object datas
// Async Storage functions
export const saveStorageData = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (e) {
    console.error(e.message);
  }
};

export const getStorageData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const removeStorageData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e.message);
  }
};

export const containsKey = async (key) => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys.includes(key);
  } catch (e) {
    console.error(e.message);
  }
};

// user storage functions
/**
 * user info
 * @typedef {Object} user
 * @property {string} BACKGROUND_IMG - image src
 * @property {string} PROFILE_IMG - image src
 * @property {string} NAME
 * @property {string} TEAM
 * @property {string} START_DATE - YYYY-MM-DD
 * @property {string} BELT_COLOR
 * @property {string} BELT_GRAU - number
 * @property {string} PROMOTION_DATE - YYYY-MM-DD
 * @property {string} YEARLY_GOAL
 * @property {string} MONTHLY_GOAL
 */
export const saveStorageUser = async (data) => {
  const prevData = await getStorageUser();
  const newData = prevData === null ? data : { ...prevData, ...data };
  await saveStorageData(STORAGE_KEY.USER, newData);
};

export const getStorageUser = async () => {
  const hasUser = await containsKey(STORAGE_KEY.USER);
  if (!hasUser) {
    return null;
  }
  const user = await getStorageData(STORAGE_KEY.USER);
  return user;
};
export const removeStorageUser = async () => {
  await removeStorageData(STORAGE_KEY.USER);
};

export const USER_NAME_ERROR = "사용자 정보를 입력해주세요";
export const getUserProfileAndName = async () => {
  const user = await getStorageUser();
  let profile = profileImg;
  let userName = USER_NAME_ERROR;
  if (user) {
    if (isIncludeKey(user, PROFILE_IMG)) {
      profile = user[PROFILE_IMG];
    }
    if (isIncludeKey(user, NAME)) {
      userName = user[NAME];
    }
  }
  return { profile, userName };
};

// diary storage functions
/**
 * key : unique id
 * @typedef {Object} diary
 * @property {number} date - YYYY-MM-DD
 * @property {number} diaryCategory
 * @property {string} techCategory
 * @property {boolean} title
 * @property {boolean} content
 */
export const saveStorageDiary = async (data) => {
  const prevData = await getStorageDiary();
  const newData = prevData === null ? data : { ...prevData, ...data };

  await saveStorageData(STORAGE_KEY.DIARY, newData);
};
export const getStorageDiary = async () => {
  const hasKey = await containsKey(STORAGE_KEY.DIARY);
  if (!hasKey) {
    return null;
  }
  const data = await getStorageData(STORAGE_KEY.DIARY);
  return data;
};
export const removeStorageDiary = async () => {
  await removeStorageData(STORAGE_KEY.DIARY);
};

// diary category storage functions

// tech category storage functions

// YearMonth key diray storage functions
/**
 * key : YYYY-MM
 * @typedef {Object} YearMonth
 * @property {string} id - unique id
 */
export const saveStorageYearMonth = async (key, data) => {
  const prevData = await getStorageYearMonth();
  const newData = prevData === null ? data : { ...prevData, ...data };

  await saveStorageData(key, newData);
};
export const getStorageYearMonth = async (key) => {
  const hasKey = await containsKey(key);
  if (!hasKey) {
    return null;
  }
  const data = await getStorageData(key);
  return data;
};
export const removeStorageYearMonth = async (key) => {
  await removeStorageData(key);
};

// utils
export const getYearMonthStorageKey = (date) => {
  return `@${date.slice(0, 7)}`;
};
export const generateUniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

export const STORAGE_KEY = {
  USER: "@user",
  DIARY: "@diary",
  DIARY_CAT: "@diary_category",
  TECH_CAT: "@tech_category",
};

export const isIncludeKey = (userObject, key) => {
  return Object.keys(userObject).includes(key);
};
