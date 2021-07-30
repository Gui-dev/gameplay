import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks/useAuth'

import illustrationImg from './../../assets/images/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

import { colors } from '../../assets/styles/global'
import { Background } from './../../components/Background'
import { Container, Image, Content, Title, Subtitle } from './style'

export const SignIn = () => {
  const { navigate } = useNavigation()
  const { loading, signIn } = useAuth()

  const handleSignIn = async () => {
    try {
      await signIn()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Background>
      <Container>
        <Image source={ illustrationImg } resizeMode="stretch"/>

        <Content>
          <Title>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Title>
          <Subtitle>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Subtitle>

          { loading
              ? <ActivityIndicator color={ colors.primary }/>
              : <ButtonIcon
                  title="Entrar com Discord"
                  onPress={ handleSignIn }
                />
          }

        </Content>
      </Container>
    </Background>
  )
}
