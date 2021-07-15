import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn'
import { Home } from '../screens/Home'

export const StackRoutes = () => {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator initialRouteName="Home">
      <Screen name="SignIn" component={ SignIn }/>
      <Screen name="Home" component={ Home }/>
    </Navigator>
  )
}
