import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { AppView } from './src/views/AppView.js';
import configureStore from './src/store/configureStore.js';

const store = configureStore();

class GoHealthy extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppView />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('GoHealthy', () => GoHealthy);
