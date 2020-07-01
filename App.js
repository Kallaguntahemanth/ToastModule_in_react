import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {NativeModules} from 'react-native';
const {ToastModule}= NativeModules;

export default class App extends Component{
  _onPressButton(){
    ToastModule.showText(`This is Androids toast`,ToastModule.LENGTH_SHORT)
  }
  render(){
    return(
      <View style={{flex:1,justifyContent:'center'}}>
      
        <Button style={{flex:1,justifyContent:'center'}}
        onPress={this._onPressButton}
        title="Invoke from RN to get Android toast"
        >

        </Button>
      </View>
    )
  }
}