import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from "react";

const DEFAULT_COLOR = '#000000';

const getColor = (string) => {
    if (string) {
        if (string.indexOf('#') > -1 || string.indexOf('rgba') > -1) {
            return string;
        }
    }

    return DEFAULT_COLOR;
};

const Icon = function (props) {
    const { name, size, color, allowFontScaling} = props;

    return (
        <MaterialIcons
            name={ name }
            size={ size }
            color={ getColor(color) }
            allowFontScaling={ allowFontScaling }
        />
    );
};

Icon.propTypes = {
    name: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    color: React.PropTypes.string,
    allowFontScaling: React.PropTypes.bool
};

Icon.defaultProps = {
    size: 30,
    allowFontScaling: true
};

export default Icon;
