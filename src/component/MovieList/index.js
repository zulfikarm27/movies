import Axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Gap} from '..';
import {fonts} from '../../utils';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      list: this.props.state,
      data: this.props.data,
    };
  }
  render() {
    return (
      <View style={{paddingLeft: 20}}>
        <Text
          style={{color: 'white', fontFamily: fonts.semibold, fontSize: 22}}>
          {this.props.title}
        </Text>
        <Gap height={20} />
        <View style={{marginLeft: 10}}>
          <ScrollView vertical>
            <View style={{flex: 1}}>
              <Gap width={20} />
              {this.props.data.map((val, index) => {
                return (
                  <View
                    key={index}
                    style={{maxHeight: height * 0.25, marginRight: 10, flexDirection: 'row', padding:10}}>
                    <Image
                      source={{uri: val.Poster}}
                      style={{width: width * 0.15, height: height * 0.15}}
                    />
                    <Gap width={10} height={10} />

                    <Text
                      style={{color: 'white', fontFamily: fonts.regular}}
                      numberOfLines={2}>
                      {val.Title}
                    </Text>
                    <Gap width={10} />

                    <Text
                      style={{color: 'white', fontFamily: fonts.extralight}}
                      numberOfLines={1}>
                      {val.Year}
                    </Text>
                    <Gap width={10} />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
