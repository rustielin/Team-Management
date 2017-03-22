import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  StyleSheet
} from 'react-native'

import _ from 'lodash'



import PersonListContainerClass from './app/components/PersonListContainer'
import PersonList from './app/components/PersonList'
import PersonEdit from './app/components/PersonEdit'
import PersonAdd from './app/components/PersonAdd'
import Person from './app/components/Person'

import reducer from './app/reducers'

import styles from './app/styles'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'



// only log when dev
const loggerMiddleWare = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleWare,
        ),
    );
    return createStore(reducer, initialState, enhancer);
}

// initial stuff later?
const store = configureStore()


class teammanager extends Component {

    _renderScene(route, navigator) {
        var globalNavigatorProps = {
            navigator: navigator,
        }

        switch(route.ident) {
            case "PersonListContainerClass":
                return (
                    // <PersonListContainerClass {...globalNavigatorProps, items: [{txt: 'aaaaaa', completed: true}]} />
                    <PersonListContainerClass {...Object.assign({}, globalNavigatorProps, route.items)} />
                )

            case "PersonEdit":
                return (
                    <PersonEdit {...Object.assign({}, globalNavigatorProps, route.passProps)} />
                )
            case "PersonAdd":
                return (
                    <PersonAdd {...Object.assign({}, globalNavigatorProps, route.passProps)} />
                )

            default:
                return (
                    <Text>"Oops..."</Text>
                )
        }
    }

  render() {

    return (
        <Provider store={store}>
            <Navigator
                initialRoute={{ident: "PersonListContainerClass",

                    items: [{txt: 'aaaaaa', completed: true}]
                }}
                ref="appNavigator"
                renderScene={this._renderScene}
                style={styles.buffered}
            />
            {/* <Text>alskdjf</Text> */}
        </Provider>

    )
  }
}


// App ?
AppRegistry.registerComponent('teammanager', () => teammanager);
