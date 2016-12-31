import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/containers/App.js';
import configureStore from './src/store/configureStore.js';

const store = configureStore();

class GoHealthy extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('GoHealthy', () => GoHealthy);
