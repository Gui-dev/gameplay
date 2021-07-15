import React from 'react'

import { Avatar } from '../Avatar'
import { Container, UserInfo, User, Greeting, Username, Message } from './style'

export const Profile = () => {
  return (
    <Container>
      <Avatar urlImage="https://avatars.githubusercontent.com/u/23706132?v=4"/>
      <UserInfo>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>Gui Silva</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </UserInfo>
    </Container>
  )
}
