import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  StyleSheet
} from 'react-native'

import PersonListContainerClass from './app/components/PersonListContainer'
import PersonEdit from './app/components/PersonEdit'
import PersonAdd from './app/components/PersonAdd'
import reducer from './app/reducers'
import styles from './app/styles'

// redux stuff
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'

// some useful middlware
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

const store = configureStore()


class teammanager extends Component {

    _renderScene(route, navigator) {
        var globalNavigatorProps = {
            navigator: navigator,
        }

        switch(route.ident) {
            case "PersonListContainer":
                return (
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

    // tell us where to go
    return (
        <Provider store={store}>
            <Navigator
                initialRoute={{ident: "PersonListContainer"}}
                ref="appNavigator"
                renderScene={this._renderScene}
                style={styles.buffered}
            />
        </Provider>
    )
  }
}

AppRegistry.registerComponent('teammanager', () => teammanager);
