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
            .then(() => console.log(`Set data with key ${key} to LocalStorage`))
            .catch((error) => console.log(`Something went wrong with set data. More info: ${error}`));
    },

    setArray (keyArray, dataArray) {
        multiSet(keyArray, dataArray)
            .then(result => console.log(result))
            .catch((error) => console.log(`Something went wrong with setArray data. More info: ${error}`));
    },

    get (key) {
        return AsyncStorage.getItem(key)
            .then(data => {
                return JSON.parse(data);
            })
            .catch((error) => console.log(`Something went wrong with get data. More info: ${error}`));
    },

    getArrayItem (keyArray) {
        return AsyncStorage.multiGet(keyArray)
                    .then((data) => {
                        return data.map(item => {
                            return JSON.parse(item[1]);
                        })
                    .catch((error) => console.log(`Something went wrong with get Arraydata. More info: ${error}`));
        });
    },

    remove (key) {
        AsyncStorage.removeItem(key)
            .then(() => console.log(`Delete data with key ${key} to LocalStorage`))
            .catch((error) => console.log(`Something went wrong with delete data. More info: ${error}`));
    },

    clear () {
        AsyncStorage.clear()
            .then(() => console.log(`LocalStorage is clear `))
            .catch((error) => console.log(`Something went wrong with clear localStorage. More info: ${error}`));
    }
};
