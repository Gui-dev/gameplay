import React from 'react'
import { colors } from '../../assets/styles/global'

import { Container } from './style'

type BackgroundProps = {
  children: React.ReactNode
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <Container
      colors={[colors.secondary80, colors.secondary100]}
    >
      { children }
    </Container>
  )
}
