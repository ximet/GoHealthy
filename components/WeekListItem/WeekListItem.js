import React from 'react';
import { View } from 'react-native';
import TextLabel from '../TextLabel/TextLabel.js';
import Icon  from '../Icon/Icon.js';

import styles from './WeekListItemStyles.js';

const WeekListItem = (props) => {
    return (
        <View style={styles.weekListItemComponent}>
            <View style={styles.listItem}>
                <View style={styles.header}>
                    <TextLabel label={ props.label } size={20}/>
                    <Icon name="crop_original" />
                    <Icon name="alarm_on" />
                    <Icon name="error_outline" />
                </View>
            </View>
        </View>
    );
};

WeekListItem.propTypes = {
    label: React.PropTypes.string.isRequired
};

export default WeekListItem;
