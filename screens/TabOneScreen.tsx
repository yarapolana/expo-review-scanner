import * as React from 'react';
import { StyleSheet, Linking, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Svg, { Path } from 'react-native-svg'

import { Text, View } from '../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { TabOneParamList } from '../types';
import { useNavigation } from '@react-navigation/core';

const { width } = Dimensions.get('window')
const ScannerBox = () => (
  <Svg width={width} height={width / 2} viewBox="0 0 1189 806" fill="none">
    <Path
      d="M0 201.5V0H297.25V10H10V201.5H0ZM1189 201.5V0H891.75V10H1179V201.5H1189ZM1189 604.5H1179V796H891.75V806H1189V604.5ZM297.25 806V796H10V604.5H0V806H297.25Z"
      fill="red"
    />
  </Svg>
)

export default function TabOneScreen() {
  const { navigate } = useNavigation()
  const [hasCameraPermission, setCameraPermission] = React.useState(false)
  const [scanCounter, setScanCounter] = React.useState(0)
  
  React.useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA).then(({ status }) => {
      setCameraPermission(status === 'granted')

      if (status !== 'granted') {
        setCameraPermission(false)
      }
    })
  }, [])

  const handleScan = ({ data }: { data: string }) => {
    if (data) {
      setScanCounter(scanCounter+1)
      // navigate('TabTwo', { scannedData: data }) // Navigates to TabTwon and params is always undefined
      navigate('TabOneNested', { scannedData: data }) // After a few tries <BarcodeScanner> and <Camera> stop working
    }
  }

  if(!hasCameraPermission) {
    return (
      <View style={styles.container}>
        <Text onPress={Linking.openSettings} style={styles.title}>You dont have camera access. Click here to change that.</Text>
      </View>
    )
  }
  
  return (
    <BarCodeScanner style={styles.scanner}
      onBarCodeScanned={handleScan}
      type={BarCodeScanner.Constants.Type.back}
    >
      <ScannerBox />
    </BarCodeScanner>
    
    
    // <Camera style={styles.scanner}
    //   onBarCodeScanned={handleScan}
    //   type={Camera.Constants.Type.back}
    // >
    //   <ScannerBox />

    // </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: "10%",
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
  scanner: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
