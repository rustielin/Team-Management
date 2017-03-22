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
import styles from '../styles'

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
            <View style={styles.whole}>

                {/* get me outta here */}
                <TouchableOpacity
                    style={styles.exitButton}
                    onPress={() => { return this.props.navigator.pop() }}>
                    <Image source={require('../../img/delete.png')}/>
                </TouchableOpacity>

                <Text style={styles.title}>Edit team member</Text>
                <Text style={styles.subtitle}>Edit contact info and role</Text>

                <View style={styles.separator} />

                <Text style={styles.formHeader}>Info</Text>

                <Form
                    ref="form"
                    type={Person}
                    onChange={this._onChange}
                    options={options}
                    value={this.props.item} />

                <Text style={styles.formHeader}>Role</Text>

                <MultipleChoice
                    options={[
                            'Regular - Can\'t delete members',
                            'Admin - Can delete memebers'
                    ]}
                    selectedOptions={[this.boolToRole(this.props.item.isAdmin)]}
                    onSelection={(option) => this.roleToBool(option)}
                    maxSelectedOptions={1}

                />

                <View style={styles.buttonContainer}>

                    {/* delete */}
                    <TouchableOpacity style={styles.deleteButton}>
                        <Button
                            color='red'
                            onPress={this.onDelete}
                            title="Delete"
                        />
                    </TouchableOpacity>

                    {/* save  */}
                    <TouchableOpacity style={styles.saveButton} >
                        <Button
                            onPress={this.onUpdate}
                            title="Save"
                        />
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

module.exports = PersonEdit
