import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={ props.onPressButton }>
            <View>
                <Text>
                { props.label }
            </Text>
            </View>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onPressButton: React.PropTypes.func,
    label: React.PropTypes.string
};

Button.defaultProps = {
    onPressButton: () => {},
    label: ''
};

export default Button;
