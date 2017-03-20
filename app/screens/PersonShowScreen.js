import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native'

import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon  from 'react-native-vector-icons/FontAwesome'


const people = [
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "rustie", lastName: "lin", roomNumber: 36},
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},
  {firstName: "jordan", lastName: "leigh", roomNumber: 30},
  {firstName: "will", lastName: "piers", roomNumber: 14},

]

class PersonShowScreen extends Component {

  constructor(props) {
    super(props)
  }


  render() {
      console.log(this.props.navigator)
    return (
        <ViewContainer style={{backgroundColor: "coral"}}>

            <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                <Image source={require('../../img/delete.png')} />
            </TouchableOpacity>

            <Text style={{marginTop: 100, fontSize: 20}}>{'PERSON SHOW SCREEN'}</Text>
            <Text style={styles.personName}> {`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`} </Text>

        </ViewContainer>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  personName: {
      marginLeft: 25,
  },

});

module.exports = PersonShowScreen
