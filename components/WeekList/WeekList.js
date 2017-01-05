import React from 'react';
import { View, ListView, Text } from 'react-native';
import WeekListItem from '../WeekListItem/WeekListItem.js';

const WeekList = (props) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(props.items);

    return (
        <View>
            <ListView
                dataSource={dataSource}
                renderRow={(rowData) => <WeekListItem label={rowData.label}
                                                      dateText={rowData.dateText}
                                                      timeText={rowData.timeText}
                                                      centerText={rowData.centerText}
                                                      doctorText={rowData.doctorText}
                                        />}
            />
        </View>
    );
};

WeekList.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default WeekList;
