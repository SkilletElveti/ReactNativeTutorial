import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, { useState} from 'react';

export default function App() {
  const [name,setName] = useState('Poly');
  const [age,setAge] = useState('10')
  const checkForName = (name) => {
    setName(name)
  }
  const checkForAge = (Age) => {
    setAge(Age)
  }
  return (
    <View style={styles.container}>
    <Text>Enter Name:  </Text>
    <TextInput 
        style={styles.input}
        multiline
        placeholder='e.g. Jane Doe'
        onChangeText={(value) => checkForName(value)}
      />
    <Text>Enter Age:  </Text>
    <TextInput 
        style={styles.input}
        keyboardType = 'numeric'
        placeholder='e.g. 10'
        input = 'number'
        onChangeText={(value) => checkForAge(value)}
      />  
    <Text>Name: { name }, Age: { age }</Text>
    {/* <View style={styles.body}><Button title='CLICK' onPress={() => checkForName()}/></View> */}
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
    marginTop:15,
    backgroundColor: 'cyan'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
