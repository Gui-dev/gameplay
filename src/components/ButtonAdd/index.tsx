import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { colors } from '../../assets/styles/global'
import { Container } from './style'

type ButtonAddProps = RectButtonProps

export const ButtonAdd = (props: ButtonAddProps) => {
  return (
    <Container {...props}>
      <Icon name="plus" size={24} color={colors.heading}/>
    </Container>
  )
}
