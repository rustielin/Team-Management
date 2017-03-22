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
                    onPress={this.props.onPress}>
                    <View>
                        <Text>
                            {`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`} {admin}
                        </Text>
                        <Text>
                            {person.phoneNumber}
                        </Text>
                        <Text>
                            {person.email}
                            
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

Person.propTypes = {
    onPress: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired
}

module.exports = Person
