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
    StatusBar,
    ListView,
    ScrollView
} from 'react-native'

class PersonListHeader extends React.Component {
    render() {
        return (
            <View>
                <Text>THIS IS A HEADER</Text>

                <TouchableOpacity
                    underlayColor='#99d9f4'
                    onPress={this.props.addItem}>
                    <Image source={require('../../img/plus.png')}/>
                </TouchableOpacity>

                <Text>Team members</Text>
                <Text>You have {this.props.items.length} team members.</Text>
                <Text>_____________________________</Text>
            </View>
        )
    }
}

module.exports = PersonListHeader
