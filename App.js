import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState} from 'react';

export default function App() {
  const [name,setName] = useState('Poly');
  const checkForName = () => {
    if (name === "Poly") {
      setName('Shubham')
    } else {
      setName('Poly')
    }
  }
  return (
    <View style={styles.container}>
    <Text>My name is { name } </Text>
    <View style={styles.body}><Button title='Click' onPress={() => checkForName()}/></View>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headers: {
    padding: 10,
    backgroundColor: 'cyan'
  },
  boldText: {
    fontStyle: 'normal'
  },
  body: {
    margin:10,
    
    backgroundColor: 'cyan'
  }
});
