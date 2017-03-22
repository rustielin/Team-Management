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

// import addPerson from '../actions'
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
        console.log("Opening Item")

        this.props.navigator.push({
            ident: 'PersonEdit',
            passProps: {item: rowData, id: rowID, update: this.updateItem, delete: this.deleteItem}
        });
    }

    deleteItem(index) {
        this.props.deletePerson(index)
        this.props.navigator.pop();
    }

    updateItem(index, item) {
        console.log("update item")
        console.log(item);
        console.log(this.props.items);

        this.props.updatePerson(index, item)
        console.log(this.props.items)
        this.props.navigator.pop();
    }

    addItemFunc(item) {
        this.props.addPerson(item);
        this.props.navigator.pop();
    }

    addItem(item) {
        console.log("Add Item");

        this.props.navigator.push({
            ident: 'PersonAdd',
            passProps: {add: this.addItemFunc}
        });

    }




    render() {
        return (
            <View style={{flex: 1}}>

                <PersonList
                    items={this.props.items}
                    onHeaderAdd={this.addItem}
                    onPressItem={this.openItem}
                />
            </View>
        )
    }
}



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

// dispatch to entire application
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(ActionCreators, dispatch);
// }

// module.exports = connect(() => { return {} }, mapDispatchToProps)(PersonListContainer);module.exports = connect(() => { return {} }, mapDispatchToProps)(PersonListContainer);
// export default connect((state) => {
//     return {
//         items: state.items
//     }
// }, mapDispatchToProps)(PersonListContainerClass);
// const PersonListContainer = connect()(PersonListContainerClass)
//
// export default PersonListContainer
