import React from 'react';
import { View } from 'react-native';

import styles from './HeaderStyles.js';

const Header = (props) => {

    return (
        <View style={ styles.HeaderComponent }>
            <View style={ styles.HeaderLeft }>
                {props.leftItem.map(item => item)}
            </View>
            <View style={ styles.HeaderCenter }>
                {props.centerItem}
            </View>
            <View style={ styles.HeaderRight }>
                {props.rightItem.map(item => item)}
            </View>
        </View>
    );
};

Header.propTypes = {
    leftItem: React.PropTypes.array,
    centerItem: React.PropTypes.string,
    rightItem: React.PropTypes.array,
};

Header.defaultProps = {
    leftItem: [],
    rightItem: [],
    centerItem: ''
};

export default Header;
