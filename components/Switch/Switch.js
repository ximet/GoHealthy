import React from 'react';
import {
    PanResponder,
    View,
    TouchableHighlight,
    Animated
} from 'react-native';

class Switch extends React.Component {
    constructor (props) {
        super(props);

        const w = this.props.switchWidth - Math.min(this.props.switchHeight, this.props.buttonRadius*2);

        this.padding = 2;
        this.start = {};
        this.state = {
            width: w,
            state: this.props.active,
            position: new Animated.Value(this.props.active? w : 0),
        };

    }


    componentWillMount () {
        const self = this;
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {

                if (!self.props.enableSlide) {
                    return;
                }

                self.setState({pressed: true});
                self.start.x0 = gestureState.x0;
                self.start.pos = self.state.position._value;
                self.start.moved = false;
                self.start.state = self.state.state;
                self.start.stateChanged = false;
            },
            onPanResponderMove: (evt, gestureState) => {
                if (!self.props.enableSlide) {
                    return;
                }

                self.start.moved = true;
                if (self.start.pos == 0) {
                    if (gestureState.dx <= self.state.width && gestureState.dx >= 0) {
                        self.state.position.setValue(gestureState.dx);
                    }
                    if (gestureState.dx > self.state.width) {
                        self.state.position.setValue(self.state.width);
                    }
                    if (gestureState.dx < 0) {
                        self.state.position.setValue(0);
                    }
                }
                if (self.start.pos == self.state.width) {
                    if (gestureState.dx >= -self.state.width && gestureState.dx <= 0) {
                        self.state.position.setValue(self.state.width+gestureState.dx);
                    }
                    if (gestureState.dx > 0) {
                        self.state.position.setValue(self.state.width);
                    }
                    if (gestureState.dx < -self.state.width) {
                        self.state.position.setValue(0);
                    }
                }

                const currentPos = self.state.position._value;

                self.onSwipe(currentPos, self.start.pos,
                    () => {
                        if (!self.start.state) self.start.stateChanged = true;
                        self.setState({state: true})
                    },
                    ()=>{
                        if (self.start.state) self.start.stateChanged = true;
                        self.setState({state: false})
                    });
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                self.setState({pressed: false});

                const currentPos = self.state.position._value;

                if (!self.start.moved || (Math.abs(currentPos-self.start.pos)<5 && !self.start.stateChanged)) {
                    self.toggle();
                    return;
                }
                self.onSwipe(currentPos, self.start.pos, self.activate, self.deactivate);
            },
            onPanResponderTerminate: (evt, gestureState) => {
                const currentPos = self.state.position._value;

                self.setState({pressed: false});
                self.onSwipe(currentPos, self.start.pos, self.activate, self.deactivate);
            },
            onShouldBlockNativeResponder: (evt, gestureState) => true,
        });
    }

    onSwipe (currentPosition, startingPosition, onChange, onTerminate) {
        if (currentPosition-startingPosition >= 0) {
            if (currentPosition-startingPosition > this.state.width/2 || startingPosition == this.state.width) {
                onChange();
            } else {
                onTerminate();
            }
        } else {
            if (currentPosition-startingPosition < -this.state.width/2) {
                onTerminate();
            } else {
                onChange();
            }
        }
    }

    activate() {
        Animated.timing(
            this.state.position,
            {
                toValue: this.state.width,
                duration: this.props.switchAnimationTime,
            }
        ).start();
        this.changeState(true);
    }

    deactivate() {
        Animated.timing(
            this.state.position,
            {
                toValue: 0,
                duration: this.props.switchAnimationTime,
            }
        ).start();
        this.changeState(false);
    }

    changeState (state) {
        const callHandlers = this.start.state != state;

        setTimeout(() => {
            this.setState({state : state});
            if (callHandlers) {
                this.callback();
            }
        }, this.props.switchAnimationTime/2);
    }

    callback () {
        const state = this.state.state;

        if (state) {
            this.props.onActivate();
        } else {
            this.props.onDeactivate();
        }
        this.props.onChangeState(state);
    }

    toggle () {
        if (!this.props.enableSlide) return;

        if (this.state.state) {
            this.deactivate();
        } else {
            this.activate();
        }
    }

    render () {
        const doublePadding = this.padding * 2 - 2;
        const halfPadding = doublePadding / 2;

        return (
            <View
                {...this._panResponder.panHandlers}
                style={{padding: this.padding, position: 'relative'}}>
                <View
                    style={{
                        backgroundColor: this.state.state ? this.props.activeBackgroundColor : this.props.inactiveBackgroundColor,
                        height: this.props.switchHeight,
                        width: this.props.switchWidth,
                        borderRadius: this.props.switchHeight/2,
                    }}/>
                <TouchableHighlight underlayColor='transparent' activeOpacity={1} style={{
                    height: Math.max(this.props.buttonRadius*2+doublePadding, this.props.switchHeight+doublePadding),
                    width: this.props.switchWidth+doublePadding,
                    position: 'absolute',
                    top: 1,
                    left: 1
                }}>
                    <Animated.View style={[{
                        backgroundColor:
                            this.state.state
                                ? (this.state.pressed? this.props.activeButtonPressedColor : this.props.activeButtonColor)
                                : (this.state.pressed? this.props.inactiveButtonPressedColor : this.props.inactiveButtonColor),
                        height: this.props.buttonRadius*2,
                        width: this.props.buttonRadius*2,
                        borderRadius: this.props.buttonRadius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        top: halfPadding + this.props.switchHeight/2 - this.props.buttonRadius,
                        left: this.props.switchHeight/2 > this.props.buttonRadius ? halfPadding : halfPadding + this.props.switchHeight/2 - this.props.buttonRadius,
                        transform: [{ translateX: this.state.position }]
                    },
                        this.props.buttonShadow]}
                    >
                        {this.props.buttonContent}
                    </Animated.View>
                </TouchableHighlight>
            </View>
        )
    }
}
Switch.propTypes = {

};

Switch.defaultProps = {
    active: false,
    style: {},
    inactiveButtonColor: '#2196F3',
    inactiveButtonPressedColor: '#42A5F5',
    activeButtonColor: '#FAFAFA',
    activeButtonPressedColor: '#F5F5F5',
    buttonShadow: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0 },
    },
    activeBackgroundColor: 'rgba(255,255,255,.5)',
    inactiveBackgroundColor: 'rgba(0,0,0,.5)',
    buttonRadius: 15,
    switchWidth: 40,
    switchHeight: 20,
    buttonContent: null,
    enableSlide: true,
    switchAnimationTime: 200,
    onActivate: function() {},
    onDeactivate: function() {},
    onChangeState: function() {}
};

export default Switch;
