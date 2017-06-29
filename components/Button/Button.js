import React from 'react';
import { RkButton } from 'react-native-ui-kitten';

const Button = (props) => {
    return (
        <RkButton onPress={props.onPressButton}>{ props.label }</RkButton>
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
