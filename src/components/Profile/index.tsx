import React from 'react'

import { useAuth } from '../../hooks/useAuth'

import { Avatar } from '../Avatar'
import { Container, UserInfo, User, Greeting, Username, Message } from './style'

export const Profile = () => {
  const { user } = useAuth()

  return (
    <Container>
      <Avatar urlImage={ user.avatar }/>
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
