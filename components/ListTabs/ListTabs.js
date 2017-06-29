import React from 'react';
import { RkTabView } from 'react-native-ui-kitten';
import Tab from '../Tab/Tab.js';

const ListTabs = (props) => {
    return (
        <RkTabView rkType='material'>
            {
                items.map(item =>
                    (<Tab label={item.label} />)
                )
            }
        </RkTabView>
    );
};

ListTabs.propTypes = {
    items: React.PropTypes.array,
};

ListTabs.defaultProps = {
    items: []
};

export default ListTabs;
