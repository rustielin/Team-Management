import React, { PropTypes } from 'react'
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    ScrollView
}

import Person from './Person'

PersonList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const styles = StyleSheet.create({
    container : {
        paddingTop      : 30,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : '#F5FCFF',
        flexDirection   : 'row',
        flexWrap        : 'wrap'
    }
});

class PersonList extends Component {
    buildPeople(data) {
        
    }
}

export default PersonList
