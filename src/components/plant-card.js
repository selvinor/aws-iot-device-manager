import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView, 
  Image
} from 'react-native';
import useGlobal from "../store";

const PlantCard = () => {
  const [globalState, globalActions] = useGlobal();
  return (
    <View className="PlantCard" onClick={() => globalActions.showPlantDetail(globalState.plant_id)} >
      <Image>{globalState.activePlants.plant_image}</Image>
      <Text>{globalState.activePlants.plant_name}</Text>
      <Text>{globalState.activePlants.plant_latinName}</Text>
    </View>
  );
};

export default PlantCard;