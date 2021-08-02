import React from 'react'

import { discordConfig } from './../../config/discordAuth'

import DiscordSvg from './../../assets/images/discord.svg'
import { Container } from './style'

type GuildIconProps = {
  guildId: string
  iconId: string
}

export const GuildIcon = ({ guildId, iconId }: GuildIconProps) => {
  const uri = `${discordConfig.CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <>
      {
        iconId
        ?  <Container
              source={{ uri }}
              resizeMode="cover"
            />
        : <DiscordSvg height={ 40 } width={ 40 }/>
      }
    </>
  )
}
