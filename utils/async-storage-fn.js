import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../constants/names";

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

export const saveStorageUser = async (userData) => {
  await saveStorageData(STORAGE_KEY.USER, JSON.stringify(userData));
};
export const getStorageUser = async () => {
  const hasUser = await containsKey(STORAGE_KEY.USER);
  if (!hasUser) {
    return null;
  }
  const user = await getStorageData(STORAGE_KEY.USER);
  return JSON.parse(user);
};
