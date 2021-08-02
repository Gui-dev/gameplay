import React, { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { ListDivider } from '../../components/ListDivider'
import { Guild, GuildProps } from '../../components/Guild'

import { Load } from '../../components/Load'
import { Container, GuildList } from './style'

type GuildsProps = {
  handleGuildSelected: (guild: GuildProps) => void
}

export const Guilds = ( { handleGuildSelected }: GuildsProps ) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadGuilds = async () => {
      setLoading(true)
      const { data } = await api.get('/users/@me/guilds')
      setGuilds(data)
      setLoading(false)
    }

    loadGuilds()
  }, [])

  return (
    <Container>
      {
        loading
          ? <Load />

          : <GuildList
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
              ListHeaderComponent={ () => <ListDivider isCentered /> }
              ItemSeparatorComponent={ () => <ListDivider isCentered /> }
            />
      }

    </Container>
  )
}
