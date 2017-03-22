import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({

  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
    paddingRight: 15
  },

  title: {
      color: '#000000',
      fontSize: 30,
  },

  subtitle: {
      color: '#9E9E9E',
      fontSize: 15,
      paddingBottom: 20
  },

  formHeader: {
      color: '#000000',
      fontSize: 15,
      paddingTop: 20,
      paddingBottom: 10

  },


  addButton: {
      alignItems: 'flex-end',
  },

  exitButton: {
      alignItems: 'flex-end',
  },

  saveButton: {
      alignItems: 'flex-end',
  },

  deleteButton: {
      alignItems: 'flex-start',
  },

  buttonContainer: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },

  buffered: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 10
  },

  screen: {
      flexDirection: 'column'
  },

  info: {
      flexDirection: 'row',
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10
    },

  infoName: {
      fontSize: 15,
      padding: 5,
      color: '#000000'
  },

  infoText: {
      fontSize: 15,
      padding: 5
  },

  profPic: {
      marginRight: 10,
      height: 70,
      width: 70
  }



});
module.exports = styles;
