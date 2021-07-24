import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn'
import { Home } from '../screens/Home'
import { AppointmentDetails } from './../screens/AppointmentDetails'
import { AppointmentCreate } from './../screens/AppointmentCreate'

import { colors } from '../assets/styles/global'

export const AuthRoutes = () => {
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
      <Screen name="Home" component={ Home }/>
      <Screen name="AppointmentDetails" component={ AppointmentDetails }/>
      <Screen name="AppointmentCreate" component={ AppointmentCreate }/>
    </Navigator>
  )
}
