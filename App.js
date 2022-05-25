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
  const [peoples,setPeoples] = useState([
    {name: 'Shubham', key: '1'},
    {name: 'Rohit', key: '2'},
    {name: 'Vinod', key: '3'},
    {name: 'Rahul', key: '4'},
    {name: 'Varun', key: '5'},
  ])
  return (
    <View style={styles.container}>
    {peoples.map((people) => {
        return(<View key={people.key}>
          <Text> {people.name} </Text>
        </View>);
      })}
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
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
