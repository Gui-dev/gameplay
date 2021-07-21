import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import PlayerSvg from './../../assets/images/player.svg'
import CalendarSvg from './../../assets/images/calendar.svg'
import { IAppointmentProps } from './IAppointment'
import { GuildIcon } from '../GuildIcon'
import { categories } from '../../utils/categories'

import { Container, Content, GuildInfo, GuildHeader, GuildFooter, DateInfo, Date, GuildTitle,
  Category, PlayerInfo, PlayerText
} from './style'
import { colors } from '../../assets/styles/global'


type AppointmentProps = RectButtonProps & {
  data: IAppointmentProps
}

export const Appointment = ({ data, ...rest }: AppointmentProps) => {
  const [category] = categories.filter(item => item.id === data.category)
  const { primary, on } = colors

  return (
    <Container {...rest}>
      <Content>
        <GuildIcon />

        <GuildInfo>
          <GuildHeader>
            <GuildTitle>{ data.guild.name }</GuildTitle>
            <Category>{ category.title }</Category>
          </GuildHeader>

          <GuildFooter>

            <DateInfo>
              <CalendarSvg />
              <Date>{ data.date }</Date>
            </DateInfo>

            <PlayerInfo>
              <PlayerSvg fill={ data.guild.owner ? primary : on }/>
              <PlayerText isOwner={ data.guild.owner }>
                {data.guild.owner ? 'Anfitrião' : 'Visitante'}
              </PlayerText>
            </PlayerInfo>

          </GuildFooter>

        </GuildInfo>

      </Content>
    </Container>
  )
}
