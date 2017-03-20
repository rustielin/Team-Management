/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Person = ({ onClick, firstName, lastName, email
, phoneNumber, isAdmin}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: isAdmin ? 'line-through': 'none'
    }}
  >
    {firstName}
  </li>

)

Person.propTypes = {
  onClick: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

export default Person
