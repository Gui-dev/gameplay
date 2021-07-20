import React from 'react'
import { useNavigation } from '@react-navigation/native'

import illustrationImg from './../../assets/images/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

import { Background } from './../../components/Background'
import { Container, Image, Content, Title, Subtitle } from './style'

export const SignIn = () => {
  const { navigate } = useNavigation()

  const handleSignIn = () => {
    navigate('Home')
  }

  return (
    <Background>
      <Container>
        <Image source={ illustrationImg } resizeMode="stretch"/>

        <Content>
          <Title>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Title>
          <Subtitle>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Subtitle>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={ handleSignIn }
          />
        </Content>
      </Container>
    </Background>
  )
}
