import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fonts, getData} from '../../utils';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const direction = [
  {x: 0, y: 3},
  {x: 4, y: 2.1},
];
const color = [
  '#42f5ad',
  '#0c915c',
];
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    const getInfo = async () => {
      const data = await getData('user');
      console.log('data', data);
      if (data != undefined) {
        setTimeout(() => {
        }, 3000);
        setTimeout(() => {
          this.props.navigation.navigate('Home');
        }, 8000);
      } else {
        setTimeout(() => {
        }, 3000);
        setTimeout(() => {
          this.props.navigation.navigate('Login');
        }, 8000);
      }
    };
    getInfo();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={direction[0]}
          end={direction[1]}
          colors={color}
          style={styles.linear}>
          <View>
            <Text style={styles.icontext}>MOVIES</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linear: {
    zIndex: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icontext: {
    fontSize: 70,
    color: 'white',
    fontFamily: fonts.semibold,
  },
  subicontext: {
    fontSize: 35,
    color: 'white',
    fontFamily: fonts.regular,
  },
});