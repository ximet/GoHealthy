import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';

import styles from './InputStyles.js';

const Input = (props) => {
    return (
        <View style={styles.inputComponent}>
            <Text style={styles.inputLabel}>
                { props.label }
            </Text>
            <TextInput
                style={styles.inputValue}
                placeholder={ props.placeholder }
                maxLength={ props.maxLength }
                onChange={ props.onChange }
                onFocus={ () => {} }
                onBlur={ () => {} }
                value={ props.value }
                autoFocus={props.autoFocus}
            />
        </View>
    );
};

Input.propTypes = {
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    maxLength: React.PropTypes.number,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    autoFocus: React.PropTypes.bool
};

Input.defaultProps = {
    onPressButton: () => {},
    value: '',
    placeholder: 'some place',
    autoCapitalize: 'off',
    onFocus: () => {},
    onBlur: () => {},
    autoFocus: false
};

export default Input;
