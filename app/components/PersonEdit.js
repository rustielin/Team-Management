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
    ScrollView
} from 'react-native'

import  MultipleChoice  from 'react-native-multiple-choice'


var t = require('tcomb-form-native');

var Form = t.form.Form;

var Person = t.struct({
    firstName: t.Str,
    lastName: t.Str,
    email: t.Str,
    phoneNumber: t.Str,
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


class PersonEdit extends React.Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onUpdate() {
        var value = this.refs.form.getValue();
        console.log(Object.assign({}, value, {isAdmin: this.isAdmin}));
        console.log("overwriting" + this.props.id)
        if (value) {
            // put the admin value back in
            this.props.update(this.props.id, Object.assign({}, value, {isAdmin: this.isAdmin}));
        }
    }

    onDelete() {
        console.log(this.props.id);
        this.props.delete(this.props.id);
    }

    roleToBool(msg) {
        if (msg === 'Admin - Can delete memebers') {
            this.isAdmin = true;
        } else if (msg === 'Regular - Can\'t delete members') {
            this.isAdmin = false;
        }
    }

    boolToRole(bool) {
        if (bool) {
            return 'Admin - Can delete memebers'
        } else {
            return 'Regular - Can\'t delete members'
        }

    }

    render() {
        this.isAdmin = this.props.item.isAdmin;
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
                    options={options}
                    value={this.props.item} />

                <Text>Role</Text>

                <MultipleChoice
                    options={[
                            'Regular - Can\'t delete members',
                            'Admin - Can delete memebers'
                    ]}
                    selectedOptions={[this.boolToRole(this.props.item.isAdmin)]}
                    onSelection={(option) => this.roleToBool(option)}
                    maxSelectedOptions={1}

                />

                {/* save  */}
                <TouchableOpacity>
                    <Button

                        onPress={this.onUpdate}
                        title="Save"
                    />
                </TouchableOpacity>

                {/* delete */}
                <TouchableOpacity>
                    <Button
                        onPress={this.onDelete}
                        title="Delete"
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

module.exports = PersonEdit
