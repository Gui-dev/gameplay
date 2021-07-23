import React from 'react'
import { TextInputProps } from 'react-native'

import { Container } from './style'

type TextAreaProps = TextInputProps

export const TextArea = ({ ...rest }: TextAreaProps) => {
  return (
    // @ts-ignore
    <Container
      { ...rest }
    />
  )
}
