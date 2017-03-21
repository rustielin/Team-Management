import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text
} from 'react-native'

import _ from 'lodash'



import PersonListContainer from './app/components/PersonListContainer'
import PersonList from './app/components/PersonList'
import PersonEdit from './app/components/PersonEdit'
import Person from './app/components/Person'

import reducer from './app/reducers'

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
            case "PersonListContainer":
                return (
                    <PersonListContainer {...globalNavigatorProps} />
                )

            case "PersonEdit":

                return (
                    <PersonEdit {...Object.assign({}, globalNavigatorProps, route.passProps)} />
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
                initialRoute={{ident: "PersonListContainer"}}
                ref="appNavigator"
                renderScene={this._renderScene}
            />
            {/* <Text>alskdjf</Text> */}
        </Provider>

    )
  }
}

// App ?
AppRegistry.registerComponent('teammanager', () => teammanager);
