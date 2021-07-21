import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { colors, fonts } from '../../assets/styles/global'

type PlayersTextProps = {
  isOwner: boolean
}

export const Container = styled(RectButton)`

`

export const Content = styled.View`
  flex-direction: row;
  align-self: center;
  width: 100%;
`

export const GuildInfo = styled.View`
  flex: 1;
`

export const GuildHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`

export const GuildFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Date = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text500};
  color: ${colors.heading};
  margin-left: 7px;
`

export const GuildTitle = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
`

export const Category = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text400};
  color: ${colors.heading};
  /* margin-right: 24px; */
`

export const PlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const PlayerText = styled.Text<PlayersTextProps>`
  font-size: 13px;
  font-family: ${fonts.text500};
  color: ${({ isOwner }) => isOwner ? colors.primary : colors.on};
  margin-left: 7px;
  /* margin-right: 24px; */
`


