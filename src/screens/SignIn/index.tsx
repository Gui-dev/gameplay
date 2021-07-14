import React from 'react'

import illustrationImg from './../../assets/images/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Container, Image, Content, Title, Subtitle } from './style'

export const SignIn = () => {

  return (
    <Container>
      <Image source={ illustrationImg } resizeMode="stretch"/>

      <Content>
        <Title>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Title>
        <Subtitle>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Subtitle>

        <ButtonIcon
          title="Entrar com Discord"
        />
      </Content>
    </Container>
  )
}
