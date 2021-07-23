import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, ButtonText } from './style'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    // @ts-ignore
    <Container {...rest}>
      <ButtonText>{ title }</ButtonText>
    </Container>
  )
}
