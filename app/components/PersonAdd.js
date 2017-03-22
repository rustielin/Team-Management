import React, { PropTypes } from 'react'
import {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Dimensions,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Picker
} from 'react-native'

import  MultipleChoice  from 'react-native-multiple-choice'

var t = require('tcomb-form-native');

var Form = t.form.Form;

var Person = t.struct({
    firstName: t.String,
    lastName: t.String,
    email: t.String,
    phoneNumber: t.String,
});

var options = {
    auto: 'none', // no default labels/placeholders
    fields: {
        firstName: {
            error: 'Need a first name',
            placeholder: 'First name',
            placeholderTextColor: '#9E9E9E',

        },
        lastName: {
            placeholder: 'Last name',
            placeholderTextColor: '#9E9E9E',

        },
        email: {
            placeholder: 'Email (e.g. abc@xyz.com)',
            placeholderTextColor: '#9E9E9E',

        },
        phoneNumber: {
            placeholder: 'Phone number (e.g. 510-123-4567)',
            placeholderTextColor: '#9E9E9E',

        }
    }
}

class PersonAdd extends React.Component {


    constructor() {
        super();
        this.onAdd=this.onAdd.bind(this);
        this.isAdmin = false;
    }

    onAdd() {
        var value = this.refs.form.getValue();
    
        if (value) {
            this.props.add(Object.assign({}, value, {isAdmin: this.isAdmin}));
        }
    }

    selectRole(msg) {
        if (msg === 'Admin - Can delete memebers') {
            this.isAdmin = true;
        } else if (msg === 'Regular - Can\'t delete members') {
            this.isAdmin = false;
        }
    }

    render() {
        return (
            <View>

                {/* get me outta here */}
                <TouchableOpacity
                    onPress={() => { return this.props.navigator.pop() }}>
                    <Image source={require('../../img/delete.png')}/>
                </TouchableOpacity>

                <Text>Info</Text>
                <Form
                    ref="form"
                    type={Person}
                    onChange={this._onChange}
                    options={options}   />

                <Text>Role</Text>

                <MultipleChoice
                    options={[
                        'Regular - Can\'t delete members',
                        'Admin - Can delete memebers'
                    ]}
                    selectedOptions={['Regular - Can\'t delete members']}
                    onSelection={(option) => this.selectRole(option)}
                    maxSelectedOptions={1}

                />


                <TouchableOpacity style={styles.saveButton}>
                    <Button

                        onPress={this.onAdd}
                        title="Save"
                    />

                </TouchableOpacity>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    saveButton: {
        height: 36,
        width: 70,
        marginLeft: 10,
    }
});

module.exports = PersonAdd
