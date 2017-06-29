import React from 'react';
import { RkTabView } from 'react-native-ui-kitten';
import { Text } from 'react-native';

const Tab = (props) => {
    return (
        <RkTabView.Tab title={props.label}>
            <Text>Tab 1 Content</Text>
        </RkTabView.Tab>
    );
};

Tab.propTypes = {
    onPressButton: React.PropTypes.func,
    label: React.PropTypes.string
};

Tab.defaultProps = {
    onPressButton: () => {},
    label: ''
};

export default Tab;
