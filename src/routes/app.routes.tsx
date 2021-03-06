import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'

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
      <Screen name="Home" component={ Home }/>
      <Screen name="AppointmentDetails" component={ AppointmentDetails }/>
      <Screen name="AppointmentCreate" component={ AppointmentCreate }/>
    </Navigator>
  )
}
