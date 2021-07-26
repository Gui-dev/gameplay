import React from 'react'
import { ModalProps, TouchableWithoutFeedback } from 'react-native'
import { Background } from '../Background'

import { Container, Overlay, Content, Bar } from './style'

type ModalViewProps = ModalProps & {
  children: React.ReactNode
  closeModal: () => void
}

export const ModalView = ({ children, closeModal, ...rest }: ModalViewProps) => {
  return (
    // @ts-ignore
    <Container
      { ...rest }
      animationType="slide"
      transparent
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={ closeModal }>
        <Overlay>
          <Content>
            <Background>
              <Bar />
              { children }
            </Background>
          </Content>
        </Overlay>
      </TouchableWithoutFeedback>
    </Container>
  )
}
