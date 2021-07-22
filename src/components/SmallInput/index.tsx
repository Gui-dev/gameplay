import React from 'react'
import { TextInputProps } from 'react-native'

import { Container } from './style'

type SmallInputProps = TextInputProps

export const SmallInput = ({ ...rest }: SmallInputProps) => {
  return (
    // @ts-ignore
    <Container
      { ...rest }
      keyboardType="numeric"
    />
  )
}
