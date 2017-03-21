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
    ScrollView
} from 'react-native'

import PersonList from './PersonList'
import PersonEdit from './PersonEdit'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

import * as ActionCreators from '../actions'


import * as user from '../actions/userActions'

class PersonListContainer extends React.Component {

    constructor() {
        super();
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.openItem = this.openItem.bind(this);
        // just the initial items
        this.state={...this.state, items: [{txt: 'aaa'}]};
    }
    deleteItem(index) {
        var items = this.state.items;
        items.splice(index, 1);
        this.setState({items: items})
    }

    updateItem(item, index) {
        var items = this.state.items;
        if (index) {
            // update
            items[index] = item;
            this.props.updatePerson();
        }
        else {
            // add
            this.props.addPerson();
        }
        // this.setState({items: items});
        // this.props.store.dispatch(user.updatePerson(items));
        this.props.navigator.pop();
    }

    openItem(rowData, rowID) {
        console.log("boboboob")

        this.props.navigator.push({
            ident: 'PersonEdit',
            passProps: {item: rowData, id: rowID, update: this.updateItem}
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity
                    underlayColor='#99d9f4'
                    onPress={this.openItem}>
                    <Image source={require('../../img/plus.png')}/>
                </TouchableOpacity>

                <Text>Team members</Text>
                <Text>You have team members.</Text>
                <PersonList
                    items={this.state.items}
                    onPressItem={this.openItem} />
            </View>
        )
    }
}

// dispatch to entire application
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

module.exports = connect(() => { return {} }, mapDispatchToProps)(PersonListContainer);
