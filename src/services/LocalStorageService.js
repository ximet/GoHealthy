import { AsyncStorage } from 'react-native';

export const LocaleStorage = {
    set (key, data) {
        AsyncStorage.setItem(key, JSON.stringify(data))
            .then(() => console.log(`Set data with key ${key} to LocalStorage`));
    },

    setArray (keyArray, dataArray) {
        for(let i = 0; i < keyArray.length; i++){
            AsyncStorage.setItem(keyArray[i], JSON.stringify(dataArray[i]))
                .then(() => console.log(`Set data with key ${keyArray[i]} to LocalStorage`));
        }
    },

    get (key) {
        return AsyncStorage.getItem(key)
            .then(data => {
                return JSON.parse(data);
            });
    },

    getArrayItem (keyArray) {
        return AsyncStorage.multiGet(keyArray)
                    .then((data) => {
                        return data.map(item => {
                            return JSON.parse(item[1]);
                        });
        });
    },

    remove (key) {
        AsyncStorage.removeItem(key)
            .then(() => console.log(`Delete data with key ${key} to LocalStorage`));
    },

    clear () {
        AsyncStorage.clear()
            .then(() => console.log(`LocalStorage is clear `))
    }
};
