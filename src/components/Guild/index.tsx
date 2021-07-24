import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { GuildIcon } from './../../components/GuildIcon'

import { colors } from '../../assets/styles/global'
import { Container, Content, GuildInfo, Title, GuildOwner } from './style'

export type GuildProps = {
  id: string
  name: string
  icon: string
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}

export const Guild = ({ data, ...rest }: Props) => {
  return (
    // @ts-ignore
    <Container { ...rest }>
      <GuildIcon />

      <Content>
        <GuildInfo>
          <Title>{ data.name }</Title>

          <GuildOwner>{ data.owner ? 'Administrador' : 'Convidado' }</GuildOwner>
        </GuildInfo>

        <Feather name="chevron-right" size={24} color={colors.highlight}/>
      </Content>
    </Container>
  )
}
