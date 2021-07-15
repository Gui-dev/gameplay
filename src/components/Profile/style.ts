import styled from 'styled-components/native'
import { colors, fonts } from '../../assets/styles/global'

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
`

export const UserInfo = styled.View`

`

export const User = styled.View`
  flex-direction: row;
`

export const Greeting = styled.Text`
  font-size: 24px;
  font-family: ${fonts.title500};
  color: ${colors.heading};
  margin-right: 6px;
`

export const Username = styled.Text`
  font-size: 24px;
  font-family: ${fonts.title700};
  color: ${colors.heading};
`

export const Message = styled.Text`
  font-family: ${fonts.text400};
  color: ${colors.highlight};
`
