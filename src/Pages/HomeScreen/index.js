import Axios from 'axios';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MovieList, Profile} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, removeData} from '../../utils';
import {Button} from '../../component';

const direction = [
  {x: 0, y: 3},
  {x: 4, y: 2.1},
];
const color = [
  '#42f5ad',
  '#0c915c',
];
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      name: '',
    };
  }

  componentDidMount() {
    this.getMovie('Marvel');
  }
  getMovie = (listavenger) => {
    try {
      Promise.all([
        Axios.get(`http://www.omdbapi.com/?s=${listavenger}&apikey=997061b4`),
      ])
        .then(async (res) => {
          const moviestwo = res[0].data.Search;
          this.setState({movies: moviestwo});
          const data = await getData('user');
          this.setState({name: data.name});
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };

  logoutButton = async () =>{
    await removeData('user').then(this.props.navigation.replace('Login'))
  }

  render() {
    return (
      <LinearGradient
        start={direction[0]}
        end={direction[1]}
        colors={color}
        style={styles.linear}>
        <Profile name={this.state.name} />
        <Button style={styles.button} label="Logout" click={() => this.logoutButton()}></Button>
        <MovieList title="Marvel" data={this.state.movies} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linear: {
    zIndex: 2,
    flex: 1,
  },
  button: {
    width:30,
    height:20
  },
});
