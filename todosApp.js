import React, { Component } from 'react';
import { Alert, AppRegistry, Button, ScrollView, StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

export default class ButtonBasics extends Component {
  state = {
      text: "",
      todo: []
    }
    addTodo = () => {
      var newtodo = this.state.text;
      var arr = this.state.todo;
      arr.push(newtodo);
      this.setState({todo: arr, text: ""});
    }
    deleteTodo = (t) => {
      var arr = this.state.todo;
      var pos = arr.indexOf(t);
      arr.splice(pos,1);
      this.setState({todo: arr})
    }
    renderTodos = () =>{
      return this.state.todo.map(t => {
        return(
            <Text 
            key={t}
            onPress = {() => {this.deleteTodo(t)}}
            >{t}</Text>
          )
      })
    }
  render() {
    return (
      <View style={styles.textStyle}>
      <Text> Hello world, Welcome to my very first App</Text>
      <TextInput
        style={styles.textBoxStyle}
        onChangeText ={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
        title = "Add Todo"
        color = "blue"
        onPress = {this.addTodo}
      />
      {this.renderTodos()}
      </View>
    );
  }
}

const styles = {
  textStyle: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  textBoxStyle: {
    borderColor: 'blue',
    borderWidth:1,
    height: 40,
    width: 300
  },
  buttonStyle: {
    width: 40
  }
}