// PersonListContainer has all the useful functions to add/remove/update users

import React, { PropTypes } from 'react'
import {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
    ScrollView,
    BackAndroid
} from 'react-native'

import PersonList from './PersonList'
import PersonEdit from './PersonEdit'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

// useful stuff
import ActionCreators from '../actions'

import * as user from '../actions/userActions'

const boundUpdatePerson = (index, item) => dispatch(updatePerson(index, item))

class PersonListContainerClass extends React.Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.addItemFunc = this.addItemFunc.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.openItem = this.openItem.bind(this);
    }

    openItem(rowData, rowID) {
        console.log("Opening item")

        this.props.navigator.push({
            ident: 'PersonEdit',
            passProps: {item: rowData, id: rowID, update: this.updateItem, delete: this.deleteItem}
        });
    }

    deleteItem(index) {
        console.log("Delete item")
        this.props.deletePerson(index)
        this.props.navigator.pop();
    }

    updateItem(index, item) {
        console.log("Update item")
        this.props.updatePerson(index, item)
        this.props.navigator.pop();
    }

    addItemFunc(item) {
        this.props.addPerson(item);
        this.props.navigator.pop();
    }

    // passes addItemFunc as a prop
    addItem(item) {
        console.log("Add Item");
        this.props.navigator.push({
            ident: 'PersonAdd',
            passProps: {add: this.addItemFunc}
        });

    }

    render() {
        return (
            <View>
                <PersonList
                    items={this.props.items}
                    onHeaderAdd={this.addItem}
                    onPressItem={this.openItem}
                />
            </View>
        )
    }
}


// connect everything

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

const PersonListContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(PersonListContainerClass);

export default PersonListContainer;
