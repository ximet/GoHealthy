import React from 'react';

import { BackAndroid } from 'react-native';

class HardwareBackButtonAndroid extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.props.onBackCallback);
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.props.onBackCallback);
    }

    render() {
        return null; //need redesign back button
    }
}

HardwareBackButtonAndroid.propTypes = {
    onBackCallback: React.PropTypes.func
};

HardwareBackButtonAndroid.defaultProps = {
    onBackCallback: () => {}
};

export default HardwareBackButtonAndroid;
