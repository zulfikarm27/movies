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
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      age: ''
    };
  }

   sendData = (data) => {
    try {
      Axios.post('https://s1mple-tours-be.herokuapp.com/user/register', {
        firstName: data.user,
        lastName: data.event,
        email: data.email,
        username: data.username,
        password: data.password,
        age: data.age
      })
        .then(async (res) => {
          console.log(res);
          showMessage({
            message: 'Success',
            description: `Welcome to apps ${data.user}`,
            type: 'success',
            icon: 'success',
          });
          this.props.navigation.navigate('Login');
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
        description: 'Registrasi tidak dapat diproses',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={direction[0]}
          end={direction[1]}
          colors={color}
          style={styles.linear}>
          <View style={styles.wrapper}>
            <View style={styles.logowrapper}>
              <Text style={styles.icontext}>Registration</Text>
            </View>
            <ScrollView vertical>
            <View style={{flex: 1}}>
              <Input
                texts={'firstName'}
                onChangeText={(event) =>
                  this.setState({firstName: event.nativeEvent.text})
                }
              />
              <Gap height={20} />
              <Input
                texts={'lastName'}
                onChangeText={(event) =>
                  this.setState({lastName: event.nativeEvent.text})
                }
                 
              />
              <Gap height={20} />

              <Input
                texts={'email'}
                onChangeText={(event) =>
                  this.setState({email: event.nativeEvent.text})
                }
                 
              />
              <Gap height={20} />

              <Input
                texts={'username'}
                onChangeText={(event) =>
                  this.setState({password: event.nativeEvent.text})
                }
                secureTextEntry={true}
              />
              <Gap height={20} />

              <Input
                texts={'password'}
                onChangeText={(event) =>
                  this.setState({password: event.nativeEvent.text})
                }
                secure={true}
              />
              <Gap height={20} />

              <Input
                texts={'age'}
                onChangeText={(event) =>
                  this.setState({age: event.nativeEvent.text})
                }
                 
              />
              <Gap height={80} />
              <Button
                style={primaryStyle.button}
                label="Register"
                click={() =>
                  sendData({
                    firstName: this.state.user,
                    lastName: this.state.event,
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                    age: this.state.age
                  })
                }
              />
              <Gap height={20} />

            </View>
            </ScrollView>
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
    fontSize: 40,
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
