import React from 'react';

class HardwareBackButtonIOS extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return null; //need redesign back button
    }
}

HardwareBackButtonIOS.propTypes = {
    onBackCallback: React.PropTypes.func
};

HardwareBackButtonIOS.defaultProps = {
    onBackCallback: () => {}
};

export default HardwareBackButtonIOS;
