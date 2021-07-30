import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from './../screens/SignIn'

import { colors } from '../assets/styles/global'

export const AppRoutes = () => {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.secondary100
        }
      }}
    >
      <Screen name="SignIn" component={ SignIn }/>
    </Navigator>
  )
}
