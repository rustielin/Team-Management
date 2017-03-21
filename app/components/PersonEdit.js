import React, { PropTypes } from 'react'
import {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from 'react-native'

var t = require('tcomb-form-native');

var Form = t.form.Form;

var Person = t.struct({txt: t.Str, complete: t.Bool});

var options = {
    fields: {
        txt: {
            label: 'Person Item',
            placeholder: 'enter some stuff here',
            autoFocus: true
        }
    }
}

class PersonEdit extends React.Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate() {
        var value = this.refs.form.getValue();
        if (value) {
            this.props.update(value, this.props.id);
        }
        console.log(this.ident);
    }

    render() {

        return (
            <View>

                {/* get me outta here */}
                <TouchableOpacity
                    onPress={() => { return this.props.navigator.pop() }}>
                    <Image source={require('../../img/delete.png')}/>
                </TouchableOpacity>

                <Form
                    ref="form"
                    type={Person}
                    onChange={this._onChange}
                    options={options}
                    value={this.props.item} />

                {/* save  */}
                <TouchableOpacity
                    onPress={this.onUpdate}
                    underlayColor='#99d9f4'>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

module.exports = PersonEdit
