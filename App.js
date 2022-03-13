import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Button } from 'react-native-paper';

export default class App extends React.Component  {

  digaOla = () => {
    alert("Olá! Tudo bem Gean Carlos?");
  
  }
  render() {
    return (
        <View style={styles.container}>
          <Button mode="contained" onPress={this.digaOla}>
            Diga Olá
          </Button>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
