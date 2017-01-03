import React from 'react';
import { Text, View } from 'react-native';
import styles from './TextLabelStyles.js';


const TextLabel = (props) => {
    return (
        <View style={ styles.labelComponent } >
            <Text style={ [ styles.label, styles[props.type], { fontSize: props.size } ] } >
                { props.label }
            </Text>
        </View>
    );
};

TextLabel.propTypes = {
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf([ 'normal', 'bold', 'lightness', 'description' ]),
    size: React.PropTypes.number
};

TextLabel.defaultProps = {
    type: 'normal',
    size: 16
};

export default TextLabel;
