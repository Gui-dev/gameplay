import React from 'react'
import { View } from 'react-native'

import { Container } from './style'

export const GuildIcon = () => {
  const icon = 'https://i0.wp.com/freeiconspng.com/uploads/flat-discord-material-like-icon--2.png'
  return (
    <Container
      source={{ uri: icon }}
      resizeMode="cover"
    />
  )
}
