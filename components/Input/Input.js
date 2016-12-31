import React from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';

const Input = (props) => {
    return (
        <View>
            <Text>
                { props.label }
            </Text>
            <TextInput
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
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    autoFocus: React.PropTypes.bool
};

Input.defaultProps = {
    onPressButton: () => {},
    value: '',
    placeholder: '',
    autoCapitalize: 'off',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    autoFocus: false
};

export default Input;
