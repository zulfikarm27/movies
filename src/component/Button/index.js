import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../utils';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.label,
      onPress: this.props.click,
    };
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.state.onPress}>
        <Text style={styles.label}>{this.state.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#50bc9d',
    borderRadius: 5,
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.regular,
    textAlign: 'center',
    color: 'white',
  },
});
