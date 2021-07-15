import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { Background } from './src/components/Background'
import { Load } from './src/components/Load'
import { Routes } from './src/routes'

export default function App() {
  const [fonstsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fonstsLoaded) {
    return <Load />
  }

  return (
    <Background>
      <StatusBar style="light" translucent backgroundColor="transparent"/>
      <Routes />
    </Background>
  )
}
