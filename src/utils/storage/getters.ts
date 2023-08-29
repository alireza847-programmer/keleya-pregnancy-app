import AsyncStorage from '@react-native-async-storage/async-storage';

// get storage without encrypt
export const getStorage = async (key: string): Promise<string | null> => {
  return await AsyncStorage.getItem(key);
};
