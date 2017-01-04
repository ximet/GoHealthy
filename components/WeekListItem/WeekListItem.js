import React from 'react';
import { View } from 'react-native';
import TextLabel from '../TextLabel/TextLabel.js';
import Icon  from '../Icon/Icon.js';

import styles from './WeekListItemStyles.js';

const WeekListItem = (props) => {
    return (
        <View style={styles.weekListItemComponent}>
            <View style={styles.listItem}>
                <View style={styles.headerListItem}>
                    <View style={styles.headerLabel}>
                        <TextLabel label={ props.label } size={18}/>
                    </View>
                    <View style={styles.headerIcons}>
                        <Icon name="crop-original" color={'#ccc'} size={20} />
                        <Icon name="alarm-on" color={'#ccc'} size={20} />
                        <Icon name="error-outline" color={'#ccc'} size={20} />
                    </View>
                </View>

                <View style={styles.bodyListItem}>
                    <View style={styles.bodyListItemLine}>
                        <View style={styles.bodyListContainer}>
                            <Icon name="alarm-on" color={'#ccc'} size={15} />
                            <TextLabel label={ props.dateText } size={15}/>
                        </View>
                        <View style={styles.bodyListContainer}>
                            <Icon name="alarm-on" color={'#ccc'} size={15} />
                            <TextLabel label={ props.centerText } size={15}/>
                        </View>
                    </View>
                    <View style={styles.bodyListItemLine}>
                        <View style={styles.bodyListContainer}>
                            <Icon name="alarm-on" color={'#ccc'} size={15} />
                            <TextLabel label={ props.timeText } size={15}/>
                        </View>
                        <View style={styles.bodyListContainer}>
                            <Icon name="alarm-on" color={'#ccc'} size={15} />
                            <TextLabel label={ props.doctorText } size={15}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

WeekListItem.propTypes = {
    label: React.PropTypes.string.isRequired,
    dateText: React.PropTypes.string,
    timeText: React.PropTypes.string,
    centerText: React.PropTypes.string,
    doctorText: React.PropTypes.string
};

WeekListItem.defaultProps = {
    dateText: '',
    timeText: '',
    centerText: '',
    doctorText: '',
};

export default WeekListItem;
