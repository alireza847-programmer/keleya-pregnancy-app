import AsyncStorage from '@react-native-async-storage/async-storage';

// set storage without encrypt
export const setStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

// delete storage without encrypt
export const deleteStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
