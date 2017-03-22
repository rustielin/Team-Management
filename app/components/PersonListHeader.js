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

import styles from '../styles'

class PersonListHeader extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <TouchableOpacity
                    style={styles.addButton}
                    underlayColor='#99d9f4'
                    onPress={this.props.addItem}>
                    <Image source={require('../../img/plus.png')}/>
                </TouchableOpacity>

                <Text style={styles.title}>Team members</Text>
                <Text style={styles.subtitle}>You have {this.props.items.length} team members.</Text>

                <View style={styles.separator} />

            </View>
        )
    }
}

module.exports = PersonListHeader
