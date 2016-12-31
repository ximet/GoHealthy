import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Tabs from 'react-native-tabs';
import Calendar from '../../components/Calendar/Calendar.js';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


class Counter extends Component {
  render() {
    return (
      <View>
        {/*<View style={styles.displayPanel}>*/}
          {/*<Text>{`Test Page component`}</Text>*/}
        {/*</View>*/}
          {/*<View style={styles.containerz}>*/}
              {/*<Tabs selected={true} style={{backgroundColor:'white'}}*/}
                    {/*selectedStyle={{color:'red'}}>*/}
                  {/*<Text name="first">First</Text>*/}
                  {/*<Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>*/}
                  {/*<Text name="third">Third</Text>*/}
                  {/*<Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>*/}
                  {/*<Text name="fifth">Fifth</Text>*/}
              {/*</Tabs>*/}
              {/*<Text style={styles.welcome}>*/}
                  {/*Welcome to React Native*/}
              {/*</Text>*/}
              {/*<Text style={styles.instructions}>*/}
                  {/*Selected page: */}
              {/*</Text>*/}
          {/*</View>*/}

          <Calendar
              ref="calendar"
              eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
              events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
              scrollEnabled
              showControls
              monthNames={customMonthNames}
              titleFormat={'MMMM YYYY'}
              prevButtonText={'Prev'}
              nextButtonText={'Next'}
              onDateSelect={(date) => console.log('Date selected:', date)}
              onTouchPrev={() => console.log('Back TOUCH')}     // eslint-disable-line no-console
              onTouchNext={() => console.log('Forward TOUCH')}  // eslint-disable-line no-console
              onSwipePrev={() => console.log('Back SWIPE')}     // eslint-disable-line no-console
              onSwipeNext={() => console.log('Forward SWIPE')}  // eslint-disable-line no-console
          />
      </View>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
//
// const colors = {
//   background: {
//     bg: '#F5FCFF'
//   },
//   add: {
//     font: '#F69',
//     border: '#F69',
//     bg: '#FFC1D6'
//   },
//   minus: {
//     font: '#6495ED',
//     border: '#6495ED',
//     bg: '#D0DFF9'
//   }
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.background.bg,
//     },
//     displayPanel: {
//         marginVertical: 30,
//         flexDirection: 'row',
//         alignItems: 'flex-end',
//     },
//     controlPanel: {
//         marginVertical: 30
//     },
//     inline: {
//         flexDirection: 'row',
//         alignItems: 'flex-end',
//     },
//     numberBlock: {
//         fontSize: 100,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         width: 200,
//     },
//     unitBlock: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         alignSelf: 'flex-end',
//     },
//     textColorAdd: {
//         color: colors.add.font,
//     },
//     textColorMinus: {
//         color: colors.minus.font,
//     },
//     text: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     buttonAddSmall: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 30,
//         margin: 10,
//         borderRadius: 10,
//         borderWidth: 2,
//         borderColor: colors.add.border,
//         width: 80,
//     },
//     buttonMinusSmall: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 30,
//         margin: 10,
//         borderRadius: 10,
//         borderWidth: 2,
//         borderColor: colors.minus.border,
//         width: 80,
//     },
//     buttonAdd: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 30,
//         margin: 10,
//         borderRadius: 10,
//         borderWidth: 2,
//         borderColor: colors.add.border,
//         paddingLeft: 10,
//         paddingRight: 10
//     },
//     buttonMinus: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 30,
//         margin: 10,
//         borderRadius: 10,
//         borderWidth: 2,
//         borderColor: colors.minus.border,
//         paddingLeft: 10,
//         paddingRight: 10
//     },
//     containerz: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });


export default Counter;
