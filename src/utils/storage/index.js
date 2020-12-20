import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    //saving error
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    //
  }
};

export const removeData = async (key) => {
  try {
    const value = await AsyncStorage.removeItem(key);
    if (value !== null){
      return JSON.parse(value);
    }
  } catch (error){
    console.log(error)
  }
}
