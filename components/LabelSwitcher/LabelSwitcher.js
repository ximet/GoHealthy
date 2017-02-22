import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';
import Switch from '../Switch/Switch.js';


import styles from './LabelSwitcherStyles.js';

const LabelSwitcher = (props) => {
    return (
        <View style={ styles.inputComponent }>
            <Text style={ styles.inputLabel }>
                { props.label }
            </Text>
            <View style={ styles.inputValue }>
                <Switch onChangeState = { props.onChangeState } />
            </View>
        </View>
    );
};

LabelSwitcher.propTypes = {
    label: React.PropTypes.string.isRequired,
    onChangeState: React.PropTypes.func.isRequired
};

export default LabelSwitcher;
