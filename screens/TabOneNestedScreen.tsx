import { useRoute } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneNestedScreen() {
  const { params } = useRoute<any>()

  console.log('Scanned Nested Data', params ?? 'works') // Between Nested works

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'TAB ONE NESTED'}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
