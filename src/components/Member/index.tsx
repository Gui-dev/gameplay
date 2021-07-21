import React from 'react'

import { Avatar } from './../Avatar'
import { MemberProps } from './IMemberProps'

import { Container, Content, Title, Status, StatusBullet, StatusText } from './style'

export const Member = ({ data }: MemberProps) => {
  const isOnline = data.status === 'online'

  return (
    <Container>
      <Avatar urlImage={ data.avatar_url }/>

      <Content>
        <Title>{ data.username }</Title>

        <Status>

          <StatusBullet status={ isOnline } />

          <StatusText status={ isOnline }>
            { isOnline ? 'Dispónivel' : 'Ocupado' }
          </StatusText>
        </Status>
      </Content>
    </Container>
  )
}
