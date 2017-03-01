import React from 'react';
import { View } from 'react-native';

import styles from './RowStyles.js';

const Row = (props) => {
    const styleElastic = props.elastic ? styles.RowElastic : styles.RowNotElastic;

    return (
        <View style={[ styles.RowComponent, styleElastic ]}>
            { props.children }
        </View>
    );
};

Row.propTypes = {
    elastic: React.PropTypes.bool,
    label: React.PropTypes.string
};

Row.defaultProps = {
    elastic: false
};

export default Row;
