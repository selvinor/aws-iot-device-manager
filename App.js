import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon2 from 'react-native-vector-icons/Feather';
// import ListPlants from './components/plant-list';
import Plantlib from './src/components/plantlib';
import ListPlants from './src/components/plant-list';
import Dashboard from './screens/Dashboard';
// import { renderTime } from './src/utils';
// import Counter from './src/components/Counter';

export default function App() {
  // const [children, setChilds] = useState([]);
  // const addCounter = () => {
  //   const counter = <Counter key={Date.now()} />;
  //   const newChildren = [...children, counter];
  //   setChilds(newChildren);
  // };



  useEffect(() => {
    console.log('I will run after each render');
  });

  // With empty array run only once
  useEffect(() => {
    console.log('I will run only once');
  }, []);

  return (
    <ScrollView>
      <ListPlants /> 
      <Plantlib />
    </ScrollView>

    // <View style={styles.container}>
    //   <Text style={styles.header}>I am the parent component</Text>
    //   <Text style={styles.header}>{renderTime()}</Text>
    //   <Button onPress={addCounter} title="Add Counter component"></Button>
    //   <View className="container">{children}</View>  
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    marginTop: '15%',
    fontSize: 20,
    color: 'red',
    paddingBottom: 10
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    minHeight: '3%'
  }
});