import { AsyncStorage } from 'react-native';

const multiSet = (keys, values) => {
    return new Promise((resolve, reject) => {
        if (keys.length === 0 || values.length === 0 || keys.length !== values.length) {
            reject('Problem with param')
        }

        for (let i = 0; i < keys.length; i++){
            AsyncStorage.setItem(keys[i], JSON.stringify(values[i]))
                .then(() => console.log(`Set data with key ${keys[i]} to LocalStorage`));
        }

        resolve('all item from array good setting');
    })
};

export const LocaleStorage = {
    set (key, data) {
        AsyncStorage.setItem(key, JSON.stringify(data))
            .then(() => console.log(`Set data with key ${key} to LocalStorage`));
    },

    setArray (keyArray, dataArray) {
        multiSet(keyArraym, dataArray)
            .then(result => console.log(result));
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
