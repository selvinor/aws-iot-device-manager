import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useGlobal from "../store";

const plantLibrary = require('../../assets/plant-library/plants.json');

export default function Plantlib() {
  const [globalState, globalActions] = useGlobal();
 
  useEffect(() => {
    console.log('plantlib: I will run after each render');
  });

    addPlantToActive = id => {
      const plantToAdd = Object.assign({}, globalState.plantLib.filter(plant => plant._id == id)[0]);  

      plantToAdd.key = globalState.counter;
      globalActions.setPlantsActive(plantToAdd);
      globalActions.addToCounter(1);
     };



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select your plant</Text>
      <ScrollView style={{ width: '100%' }}>
        {globalState.plantLib.map(plant => (
          <View key={plant.plant_name} style={styles.textInputContainer}>
            <Text>{plant.plant_name}</Text>  
            <Text>{(plant.count > 0) ? ' (' + plant.count + ')':' '}</Text>
            <Icon
              name="plus-circle"
              size={30}
              color="blue"
              style={{ marginLeft: 'auto' }}
              onPress={() => addPlantToActive(plant._id)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width:'100%'
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
    // paddingLeft: 10,
    minHeight: '3%'
  }
});