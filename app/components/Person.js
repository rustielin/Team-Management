import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';

class Person extends React.Component {
    render() {
        // var person = this.props.person
        var item = this.props.item;
        return (
            <View>
                <TouchableHighlight
                    onPress={this.props.onPress}>
                    <View>
                        <Text>
                            {/* {`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`} */}

                            {item.txt}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

// TODO: propTypes later and also rename file?
// Person.propTypes = {
//     onPress: PropTypes.func.isRequired,
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phoneNumber: PropTypes.string.isRequired,
//     isAdmin: PropTypes.bool.isRequired
// }

module.exports = Person
