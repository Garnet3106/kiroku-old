import AsyncStorage from "@react-native-async-storage/async-storage";

export namespace Storage {
  export enum ItemKey {
    Tasks = 'tasks',
    TaskProgress = 'taskProgress',
    TaskInProgress = 'taskInProgress',
  }

  export async function getItem(key: string, initialValue: any): Promise<any> {
    const value = await AsyncStorage.getItem(key);

    if (!value) {
      await setItem(key, initialValue);
      return initialValue;
    }

    return JSON.parse(value);
  }

  export async function setItem(key: string, value: any): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
}
