import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  setItem(key: string, data: unknown) {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  }

  async getItem(key: string) {
    const data = await AsyncStorage.getItem(key);
    try {
      return JSON.parse(data || '');
    } catch (e) {
      return data;
    }
  }

  mergeItem(key, data) {
    AsyncStorage.mergeItem(key, JSON.stringify(data));
  }

  removeItem(key) {
    AsyncStorage.removeItem(key);
  }
}

export default new LocalStorage();
