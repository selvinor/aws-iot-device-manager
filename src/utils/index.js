import React from "react";
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export const renderTime = () => {
  const currentTime = new Date().toLocaleTimeString();
  return (
      <Text>Rendered at: {currentTime} </Text>
  );
};