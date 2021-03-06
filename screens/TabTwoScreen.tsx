import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/core';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const {params} = useRoute<any>()
  
  console.log('Scanned Data', params ?? 'nothing') // Between tabbar navigation, params does nothing

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'route.params?.scannedData'}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
