import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,AppRegistry, Image } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
       <View style={{padding:30}}>
       <TextInput
       style={{height:70}}
       placeholder = "Type here to translate"
       onChangeText={(text) => this.setState({text})}
        />
        <Text>
        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}