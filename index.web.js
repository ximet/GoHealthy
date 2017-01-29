import React from 'react';

import ReactNative from 'react-native'
import { Provider } from 'react-redux';
import { AppView } from './src/views/AppView.js';
import configureStore from './src/store/configureStore.js';
import { appViewActions, SET_ACTIVE_VIEW } from './src/actions/appViewActions.js';

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

ReactNative.render(<GoHealthy />, document.getElementById('Container'));



store.dispatch(appViewActions[ SET_ACTIVE_VIEW ]('MonthView'));


