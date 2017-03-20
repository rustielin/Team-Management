import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native'

import ViewContainer from './app/components/ViewContainer'
import StatusBarBackground from './app/components/StatusBarBackground'
import _ from 'lodash'
import Icon  from 'react-native-vector-icons/FontAwesome'

import PeopleIndexScreen from './app/screens/PeopleIndexScreen'
import PersonShowScreen from './app/screens/PersonShowScreen'

import PersonReducer from './app/reducers/PersonReducer'
import PersonListReducer from './app/reducers/PersonListReducer'



class teammanager extends Component {

    _renderScene(route, navigator) {
        var globalNavigatorProps = {
            navigator: navigator
        }

        switch(route.ident) {
            case "PeopleIndex":
                return (
                    <PeopleIndexScreen {...globalNavigatorProps}/>
                )

            case "PersonShow":
                return (
                    <PersonShowScreen
                        {...globalNavigatorProps}
                        person={route.person}
                    />
                )

            default:
                return (
                    <Text>"Oops..."</Text>
                )


        }
    }

  render() {
    return (
        <Navigator
            initialRoute={{ident: "PeopleIndex"}}
            ref="appNavigator"
            style={styles.navigatorStyles}
            renderScene={this._renderScene}
        />
    )
  }
}

const styles = StyleSheet.create({

    navigatorStyles: {

    }

});

AppRegistry.registerComponent('teammanager', () => teammanager);
