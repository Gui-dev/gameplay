import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn'
import { Home } from '../screens/Home'

export const AuthRoutes = () => {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator
      // initialRouteName="Home"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen name="SignIn" component={ SignIn }/>
      <Screen name="Home" component={ Home }/>
    </Navigator>
  )
}
