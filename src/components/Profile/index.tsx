import React from 'react'
import { Alert } from 'react-native'

import { useAuth } from '../../hooks/useAuth'

import { Avatar } from '../Avatar'
import { Container, ButtonAvatar, UserInfo, User, Greeting, Username, Message } from './style'


export const Profile = () => {
  const { user, signOut } = useAuth()

  const handleSignOut = () => {
    Alert.alert('Logout', 'Deseja sair do gameplay',[
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => signOut()
      }
    ])
  }

  return (
    <Container>
      <ButtonAvatar
        onPress={ handleSignOut }
      >
        <Avatar urlImage={ user.avatar }/>
      </ButtonAvatar>
      <UserInfo>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>{ user.firstName }</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </UserInfo>
    </Container>
  )
}
