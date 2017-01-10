import { AsyncStorage } from 'react-native';

export const storageSet = (key, data) => {
    AsyncStorage.setItem(key, data)
        .then(result => console.log(result))
        .catch(error => console.log(error))
};

export const storageGet = (key) => {
    return AsyncStorage.getItem(key)
        .then(result => value !== null ? value : null)
        .catch(error => console.log(error))
};

export const removeItemFromStorage = (key) => {
    AsyncStorage.removeItem(key)
        .then(result => console.log(result))
        .catch(error => console.log(error))
};

export const clearStorage = (key) => {
    AsyncStorage.clear()
        .then(result => console.log(result))
        .catch(error => console.log(error))
};
