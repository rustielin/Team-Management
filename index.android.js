/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Person from './app/components/Person/Person';

export default class teammanager extends Component {

  this.addPerson = function() {

  },

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight style={styles.top_right} onPress={this.addPerson}>
          <Image source={require('./img/plus.png')}/>
        </TouchableHighlight>
        <Text>Team members</Text>
        <Text>You have team members.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  top_right: {
    justifyContent: 'flex-end'
  }
});

AppRegistry.registerComponent('teammanager', () => teammanager);
