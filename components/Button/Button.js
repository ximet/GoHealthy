import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './ButtonStyles.js';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={ props.onPressButton } style={styles.buttonComponent}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>
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
