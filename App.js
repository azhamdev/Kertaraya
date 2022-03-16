import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainRoutes from './src/Routes/MainRoutes';


export default function App() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}


