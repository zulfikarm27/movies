import React, {Component} from 'react';
import {Dimensions, Text, View, StyleSheet, ScrollView} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Gap, Input} from '../../component';
import {colors, fonts, storeData} from '../../utils';
import Axios from 'axios';

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
export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    const sendData = (data) => {
      try {
        Axios.post('https://s1mple-tours-be.herokuapp.com/auth/client/login', {
          username: data.user,
          password: data.pass,
        })
          .then(async (res) => {
            console.log(res);
            showMessage({
              message: 'Success',
              description: `Welcome to apps ${data.user}`,
              type: 'success',
              icon: 'success',
            });
            const infoUser = {
              name: data.user,
              token: res.data.token,
              uid: res.data.payload.userId,
            };
            storeData('user', infoUser);
            this.props.navigation.navigate('Home');
          })
          .catch((err) => {
            console.log(err);
            showMessage({
              message: err.name,
              description: err.message,
              type: 'danger',
              icon: 'danger',
            });
          });
      } catch (err) {
        showMessage({
          message: 'Gagal',
          description: 'Login tidak dapat diproses',
          type: 'danger',
          icon: 'danger',
        });
      }
    };
    console.log('link', this.state.username, this.state.password);
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={direction[0]}
          end={direction[1]}
          colors={color}
          style={styles.linear}>
          <View style={styles.wrapper}>
            <View style={styles.logowrapper}>
              <Text style={styles.icontext}>MOVIES</Text>
            </View>
            <View style={{flex: 1}}>
              <Input
                texts={'Username'}
                onChangeText={(user) =>
                  this.setState({username: user.nativeEvent.text})
                }
              />
              <Gap height={20} />
              <Input
                texts={'Password'}
                onChangeText={(pass) =>
                  this.setState({password: pass.nativeEvent.text})
                }
                secure
              />
              <Gap height={80} />
              <Button
                style={primaryStyle.button}
                label="Register"
                click={() =>
                  sendData({
                    user: this.state.username,
                    pass: this.state.password,
                  })
                }
              />
            </View>
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
  logowrapper: {paddingVertical: height * 0.1, paddingBottom: 50},
  wrapper: {
    flex: 1,
  },
  label: {
    color: colors.text.white,
  },
});


const primaryStyle = StyleSheet.create({
  button: {
    backgroundColor: '#50bc9d',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color:'#fff',
    textAlign: 'center',
  },
});
