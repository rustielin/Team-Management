import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import _ from 'lodash'

import styles from '../styles'


class Person extends React.Component {
    render() {
        // var person = this.props.person
        var person = this.props.item;

        let admin = null;
        if (person.isAdmin) {
            admin = '(admin)'
        } else {
            admin = ''
        }

        return (
            <View>
                <TouchableOpacity
                    style={styles.info}
                    onPress={this.props.onPress}>
                    <Image style={styles.profPic} source={require('../../img/person.png')}/>

                    <View >
                        <Text style={styles.infoName}>
                            {`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`} {admin}
                        </Text>
                        <Text style={styles.infoText}>
                            {person.phoneNumber}
                        </Text>
                        <Text style={styles.infoText}>
                            {person.email}

                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}



module.exports = Person
