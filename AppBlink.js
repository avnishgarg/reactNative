import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
       <View>
        <Greetings text='avnish' />
        <Greetings text='arpit' />
        <Greetings text='Vishesh' />
      </View>
    );
  }
}

class Greetings extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval( () => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText};
      });
    },1000);
  }
  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
