import React from 'react';
import { View } from 'react-native';

import styles from './RowStyles.js';

const Row = (props) => {
    const styleElastic = props.isElastic ? styles.RowElastic : styles.RowNotElastic;

    return (
        <View style={[ styles.RowComponent, styleElastic ]}>
            { props.children }
        </View>
    );
};

Row.propTypes = {
    isElastic: React.PropTypes.bool,
    label: React.PropTypes.string
};

Row.defaultProps = {
    isElastic: false
};

export default Row;
