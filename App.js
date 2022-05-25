import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList,ScrollView} from 'react-native';
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
    {name: 'Varun', key: '6'},
    {name: 'Varun', key: '7'},
    {name: 'Varun', key: '8'},
    {name: 'Varun', key: '9'},
    {name: 'Varun', key: '10'},
    {name: 'Varun', key: '11'},
    {name: 'Varun', key: '12'},
    {name: 'Varun', key: '13'},
    {name: 'Varun', key: '14'},
    {name: 'Varun', key: '15'},
    {name: 'Varun', key: '16'},
    {name: 'Varun', key: '17'},
    {name: 'Varun', key: '18'},
    {name: 'Varun', key: '19'},
    {name: 'Varun', key: '20'},
    {name: 'Varun', key: '21'},
    {name: 'Varun', key: '22'},
    {name: 'Varun', key: '23'},
    {name: 'Varun', key: '24'},
  ])
  
  return (
    <View style={styles.container}>
    <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.key}
      data={peoples}
      renderItem={({item}) => ( 
        <Text style={styles.item}> {item.name} </Text>
      )}
    />
    {/* <ScrollView>
    {peoples.map((people) => {
        return(
            <View key={people.key} >
              <Text style={styles.item}> {people.name} </Text>
            </View>)
      })}
      </ScrollView> */}
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
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
  },
  item: {
    marginTop: 20,
    marginStart:15,
    marginRight:15,
    padding:10,
    backgroundColor: 'pink',
    marginHorizontal: 10,
    marginTop:10,
    textAlign: 'center'
    }
});
