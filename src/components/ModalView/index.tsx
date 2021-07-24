import React from 'react'
import { ModalProps } from 'react-native'
import { Background } from '../Background'

import { Container, Overlay, Content, Bar } from './style'

type ModalViewProps = ModalProps & {
  children: React.ReactNode
}

export const ModalView = ({ children, ...rest }: ModalViewProps) => {
  return (
    // @ts-ignore
    <Container
      { ...rest }
      transparent
      animationType="slide"
    >
      <Overlay>
        <Content>
          <Background>
            <Bar />
            { children }
          </Background>
        </Content>
      </Overlay>
    </Container>
  )
}
