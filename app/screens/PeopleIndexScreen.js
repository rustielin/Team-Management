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

class PeopleIndexScreen extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource : ds.cloneWithRows(people)
    }
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person)}>
          {/* interpolate first and last names */}
          <Text style={styles.personName}> {`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`} </Text>
          <View style={{flex: 1}}/>
          {/* <Image style={{size: 20}} source={require('img/plus.png')} /> */}
      </TouchableOpacity>
    )
  }

  _navigateToPersonShow(person) {
      this.props.navigator.push({
          ident: "PersonShow",
          person,
      })
  }


  render() {
      console.log(this.props.navigator)
    return (
      <ViewContainer>
          <ListView
              style={{marginTop: 100}}
              dataSource={this.state.peopleDataSource}
              renderRow={(person) => {return this._renderPersonRow(person)}} />
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

  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 25,
    height: 50,

  },

  personName: {


  },

  personMoreIcon: {
      color:"green",
      height: 20,
      width: 20,
      marginRight: 25,
  }

});

module.exports = PeopleIndexScreen
