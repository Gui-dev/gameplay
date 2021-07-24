import React from 'react'

import { guilds } from './../../utils/guilds'
import { ListDivider } from '../../components/ListDivider'
import { Guild, GuildProps } from '../../components/Guild'

import { Container, GuildList } from './style'

type GuildsProps = {
  handleGuildSelected: (guild: GuildProps) => void
}

export const Guilds = ( { handleGuildSelected }: GuildsProps ) => {
  return (
    <Container>
      <GuildList
        data={ guilds }
        keyExtractor={ (item: any) => String(item.id) }
        renderItem={({ item }: any) => {
          return (
            <Guild
              data={ item }
              onPress={ () => handleGuildSelected(item) }
            />
          )
        }}
        ItemSeparatorComponent={ () => <ListDivider /> }
      />
    </Container>
  )
}
