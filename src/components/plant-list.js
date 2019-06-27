import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Icon2 from 'react-native-vector-icons/Feather';
import useGlobal from "../store";

export default function ListPlants() {
  const [globalState, globalActions] = useGlobal();

  useEffect(() => {
  });
    console.log('I will run after each render');
    deletePlantFromActive = plantToDelete => {
      globalActions.removeActivePlant(plantToDelete);
    };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Plants</Text>
      <ScrollView style={{ width: '100%' }}>
      {globalState.activePlants.map((plant, index) => (
        <View key={index} style={styles.textInputContainer}>
          <Text
            style={{ margin: 'auto' }}
          >{plant.plant_name}</Text>
          <Icon2
            name="trash-2"
            size={30}
            color="red"
            style={{ marginLeft: 'auto' }}
            onPress={() => deletePlantFromActive(plant.key)}
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