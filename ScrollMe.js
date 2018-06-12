import React, { Component } from 'react';
import { Alert, AppRegistry, Button, ScrollView, StyleSheet, View, Text, TouchableHighlight} from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onPressButton2(){
    Alert.alert('You tapped ok!');
  }

  render() {
    return (
      <ScrollView>
      <Text style ={{fontSize:196}}>Scroll ME PLEASE</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3A3A3A',
    padding: 10
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
